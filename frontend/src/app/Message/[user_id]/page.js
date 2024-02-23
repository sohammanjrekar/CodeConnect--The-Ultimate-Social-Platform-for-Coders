"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Chats = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Fetch the list of conversations when the component mounts
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/chats/chats/');
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };

  const fetchMessages = async (conversationId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chats/chats/${conversationId}/`);
      const data = await response.json();
      // Handle setting the selected conversation and its messages in state
      setSelectedConversation(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async (conversationId, message) => {
    try {
      await fetch(`http://127.0.0.1:8000/chats/chats/${conversationId}/send/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: message }),
      });
      // After sending a message, refetch the messages for the selected conversation
      fetchMessages(conversationId);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const getOrCreateConversation = async (userPk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chats/create_conversation/`);
      const data = await response.json();
      // Handle setting the selected conversation and its messages in state
      setSelectedConversation(data);
    } catch (error) {
      console.error('Error getting or creating conversation:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <Navbar />
      {/* Main Chat Area */}
      <div className="flex-1">
        {/* Chat Header */}
        <header className="bg-white p-4 text-gray-700">
          <h1 className="text-2xl font-semibold">
            {selectedConversation?.user?.username || 'Select a Conversation'}
          </h1>
        </header>
        {/* Chat Messages */}
        <div className="h-screen overflow-y-auto p-4 pb-36">
          {/* Render messages based on selectedConversation */}
          {selectedConversation?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 cursor-pointer ${
                message.created_by.id === user_id ? 'justify-end' : ''
              }`}
            >
              {/* Render message content based on your structure */}
              <div className="message">{message.body}</div>
            </div>
          ))}
        </div>
        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-300 p-4 w-3/4 mx-auto">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={handleInputChange}
          />
          <button
            onClick={() => sendMessage(selectedConversation.id, userInput)}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
          >
            Send
          </button>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Chats;
