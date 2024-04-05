from chat.models import Conversation, ConversationMessage
from django.contrib.auth import get_user_model
import random
from faker import Faker

fake = Faker()

def generate_fake_conversations(users_queryset, num_conversations=10, max_users_per_conversation=5):
    for _ in range(num_conversations):
        conversation = Conversation.objects.create(created_at=fake.date_time_this_year())
        num_users = random.randint(2, max_users_per_conversation)
        conversation_users = random.sample(list(users_queryset), num_users)
        for user in conversation_users:
            conversation.users.add(user)

def generate_fake_messages(num_messages=50):
    conversations = Conversation.objects.all()
    users = get_user_model().objects.all()
    for _ in range(num_messages):
        conversation = random.choice(conversations)
        sender = random.choice(conversation.users.all())
        recipient = random.choice(conversation.users.exclude(id=sender.id))
        message = ConversationMessage.objects.create(
            conversation=conversation,
            body=fake.text(),
            recipient=recipient,
            created_at=fake.date_time_this_year(),
            sender=sender
        )

def generate_fake_data():
    users_queryset = get_user_model().objects.all()
    generate_fake_conversations(users_queryset)
    generate_fake_messages()

if __name__ == '__main__':
    generate_fake_data()
