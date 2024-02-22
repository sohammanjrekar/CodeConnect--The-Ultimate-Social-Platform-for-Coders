# views.py
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

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.tokenizer = GPT2Tokenizer.from_pretrained(self.MODEL_PATH)
        self.model = GPT2LMHeadModel.from_pretrained(self.MODEL_PATH)

    def post(self, request, *args, **kwargs):
        user_message = request.data.get('user_message', '')

        # Check if a similar user message exists in the database
        similar_messages = ChatMessage.objects.filter(Q(user_message__icontains=user_message))

        if similar_messages.exists():
            # If similar message found, retrieve a response from the database
            bot_response = similar_messages.order_by('?').first().bot_response
        else:
            # If no similar message, generate a response using the GPT-2 model
            bot_response = self.generate_bot_response(user_message)

            # Save the chat message to the database
            ChatMessage.objects.create(user_message=user_message, bot_response=bot_response)

        # Apply post-processing or filtering to the response
        bot_response = self.post_process_response(bot_response)

        return Response({'bot_response': bot_response})

    def generate_bot_response(self, user_message):
        inputs = self.tokenizer.encode("User: " + user_message, return_tensors="pt", max_length=self.MAX_TOKENS, truncation=True)

        outputs = self.model.generate(
            input_ids=inputs,
            max_length=150,  # Adjust max_length based on your needs
            num_beams=5,
            no_repeat_ngram_size=2,
            top_k=50,
            top_p=0.95,
            pad_token_id=self.tokenizer.eos_token_id,
            do_sample=True,
            temperature=0.8  # Experiment with temperature values
        )

        bot_response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        print(bot_response)
        return bot_response

    def post_process_response(self, bot_response):
        # Implement post-processing or filtering logic here
        # This could include thresholding based on a score or any other criteria
        return bot_response
