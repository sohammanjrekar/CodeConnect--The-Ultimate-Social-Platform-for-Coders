import React, { useState, useRef, useEffect } from 'react';

const Chatbox = () => {
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
    const messageElement = document.createElement("div");
    messageElement.classList.add("mb-2");
    messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
    chatboxRef.current.appendChild(messageElement);
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  };

  const respondToUser = (userMessage) => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage("This is a response from the chatbot.");
    }, 500);
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
    // Automatically open the chatbox on page load
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
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
