import re
import torch
from rest_framework.response import Response
from rest_framework.views import APIView
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import authentication_classes, permission_classes
from django.db.models import Q

# Assuming `ChatMessage` is your model
from .models import ChatMessage

@authentication_classes([])
@permission_classes([AllowAny])
class ChatMessageListCreateView(APIView):
    MODEL_PATH = "gpt2"  # Change this to your desired model path
    MAX_TOKENS = 100
    RESPONSE_FILTER_THRESHOLD = 0.5  # Adjust as needed
    KEYWORDS = [
        'aboutus', 'artgallary', 'blog', 'chats', 'codechallenges', 'codereview', 
        'comments', 'components', 'contactus', 'courses', 'dashboard', 'events', 
        'faq', 'home', 'jobportal', 'login', 'logout', 'mentorship', 'message', 
        'portfolio', 'post', 'projectrecommadation', 'signup', 'user'
    ]
    BASE_URL = "http://localhost:3000/"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.tokenizer = GPT2Tokenizer.from_pretrained(self.MODEL_PATH)
        self.model = GPT2LMHeadModel.from_pretrained(self.MODEL_PATH)

    def post(self, request, *args, **kwargs):
        user_message = request.data.get('user_message', '')

        try:
            # Check if an exact user message exists in the database
            exact_match_message = ChatMessage.objects.filter(user_message__iexact=user_message).first()

            if exact_match_message:
                # If exact message found, retrieve a response from the database
                bot_response = exact_match_message.bot_response
            else:
                # Clean the user message to remove punctuation and convert to lowercase
                cleaned_user_message = re.sub(r'[^\w\s]', '', user_message).lower()

                # Check if any keyword of the user message is present in the database
                keyword_matches = ChatMessage.objects.filter(Q(user_message__icontains=cleaned_user_message))
                if keyword_matches.exists():
                    # Add possible responses from the database
                    bot_response += "\n".join([message.bot_response for message in keyword_matches])
                else:
                    # If no matching keyword found, generate a response using the GPT-2 model
                    bot_response = self.generate_bot_response(user_message)
                    # Save the chat message to the database
                    ChatMessage.objects.create(user_message=user_message, bot_response=bot_response)
        except Exception as e:
            # Handle database or other errors
            bot_response = "An error occurred while processing your request."

        # Apply post-processing or filtering to the response
        bot_response_with_urls = self.post_process_response(bot_response, user_message)

        # Separate the response and URL
        response_data = {
            'bot_response': bot_response_with_urls['response'],
            'url': bot_response_with_urls['url']
        }

        return Response(response_data)


    def post_process_response(self, bot_response, user_message):
        # Check if the bot's response contains any keywords
        # and send URLs separately with the response
        bot_response_with_urls = {'response': bot_response, 'url': None}
        for keyword in self.KEYWORDS:
            if keyword.lower() in user_message.lower():
                bot_response_with_urls['url'] = f"{self.BASE_URL + keyword.capitalize()}"
        
        return bot_response_with_urls

    def fine_tune_model(self):
        try:
            # Get the ID of the last processed question from the database
            last_processed_id = ChatMessage.objects.latest('id').id
        except ChatMessage.DoesNotExist:
            # If no previous questions exist, start from the first question
            last_processed_id = 0

        # Retrieve questions with IDs greater than the last processed ID
        new_questions = ChatMessage.objects.filter(id__gt=last_processed_id)

        if new_questions.exists():
            # Fine-tune the model using the new questions and answers
            for question in new_questions:
                # Implement fine-tuning logic here
                # Example: fine_tuned_model.fine_tune(question.user_message, question.bot_response)
                pass

            # Update the last processed ID to the latest question ID
            last_processed_id = new_questions.latest('id').id

        # Return the last processed ID for reference
        return last_processed_id

