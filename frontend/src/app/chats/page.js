import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBotChat } from '@/redux/Slices/botChatSlice'; // Adjust the import path based on your project structure
import axios from 'axios';

const Chatbox = () => {
  const dispatch = useDispatch();

  const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [userInput, setUserInput] = useState('');
  const chatboxRef = useRef(null);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const addUserMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2", "text-right");
    messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatboxRef.current.appendChild(messageElement);
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };

  const addBotMessage = (message) => {
    console.log("Bot Response:", message);
    dispatch(addBotChat(message)); // Dispatch the addBotChat action

    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatboxRef.current.appendChild(messageElement);
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };

  const respondToUser = async (userMessage) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/botchats/chats/', {
        user_message: userMessage,
      });
      const botResponse = response.data.bot_response;
      addBotMessage(botResponse);
    } catch (error) {
      console.error('Error sending user message:', error);
    }
  };

  const handleSend = () => {
    if (userInput.trim() !== "") {
      addUserMessage(userInput);
      respondToUser(userInput);
      setUserInput("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    toggleChatbox();
  }, []);

  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-4 mr-4">
        <button
          id="open-chat"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
          onClick={toggleChatbox}
        >
          Chat with Admin Bot
        </button>
      </div>
      <div id="chat-container" className={`fixed bottom-16 right-4 w-96 ${isChatboxOpen ? '' : 'hidden'}`}>
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={toggleChatbox}
            >
              Close
            </button>
          </div>
          <div id="chatbox" ref={chatboxRef} className="p-4 h-80 overflow-y-auto">
            {/* Chat messages will be displayed here */}
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyUp={handleKeyUp}
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
