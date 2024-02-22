# views.py
import torch
from rest_framework.response import Response
from rest_framework.views import APIView
from transformers import GPT2LMHeadModel, GPT2Tokenizer

class ChatMessageListCreateView(APIView):
    tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
    model = GPT2LMHeadModel.from_pretrained("gpt2")

    def post(self, request, *args, **kwargs):
        user_message = request.data.get('user_message', '')
        bot_response = self.generate_bot_response(user_message)
        
        # Save the chat message to the database
        ChatMessage.objects.create(user_message=user_message, bot_response=bot_response)

        return Response({'bot_response': bot_response})

    def generate_bot_response(self, user_message):
        inputs = self.tokenizer.encode("User: " + user_message, return_tensors="pt", max_length=512)
        outputs = self.model.generate(inputs, max_length=100, num_beams=5, no_repeat_ngram_size=2, top_k=50, top_p=0.95)
        bot_response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return bot_response
