# events/serializers.py
from events.models import *
from rest_framework import serializers


class VirtualEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = VirtualEvent
        fields = ['platform', 'meeting_link']

class EventSerializer(serializers.ModelSerializer):
    virtual_event = VirtualEventSerializer(required=False)

    class Meta:
        model = Event
        fields = '__all__'

    def create(self, validated_data):
        virtual_event_data = validated_data.pop('virtual_event', None)
        event = Event.objects.create(**validated_data)
        if virtual_event_data:
            VirtualEvent.objects.create(event=event, **virtual_event_data)
        return event

    def update(self, instance, validated_data):
        virtual_event_data = validated_data.pop('virtual_event', None)
        virtual_event = instance.virtual_event

        instance = super(EventSerializer, self).update(instance, validated_data)

        if virtual_event_data and virtual_event:
            for attr, value in virtual_event_data.items():
                setattr(virtual_event, attr, value)
            virtual_event.save()
        elif virtual_event_data and not virtual_event:
            VirtualEvent.objects.create(event=instance, **virtual_event_data)
        elif not virtual_event_data and virtual_event:
            virtual_event.delete()

        return instance


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'