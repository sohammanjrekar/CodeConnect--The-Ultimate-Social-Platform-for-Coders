"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar'; // Import the Searchbar component

const Chats = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch list of users who have sent or received messages before
    fetchUsers();
  }, []);

  // Function to fetch users based on search query
  const fetchUsers = () => {
    axios.get('http://127.0.0.1:8000/account/users/', {
      params: {
        username: searchQuery
      }
    })
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    // Fetch messages between current user and selected user
    axios.get(`http://127.0.0.1:8000/chats/conversations/${user.id}/messages/`)
      .then(response => {
        setMessages(response.data.messages);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedUser) {
      // Send message to selected user
      axios.post(`http://127.0.0.1:8000/chats/conversations/${selectedUser.id}/send/`, {
        body: newMessage
      })
      .then(response => {
        // Add sent message to messages list
        setMessages([...messages, response.data.message]);
        // Clear message input
        setNewMessage('');
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
    }
  };
  return (
    <>
      <Navbar/>
      <div className="flex overflow-hidden mb-5">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-300">
          <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h1 className="text-2xl font-semibold">Chat Web</h1>
          </header>
          {/* User List */}
          <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
          <Searchbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery function */}
        
            {users && users.map(user => (
              <div
                key={user.id}
                className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md ${selectedUser && selectedUser.id === user.id ? 'bg-gray-200' : ''}`}
                onClick={() => handleUserClick(user)}
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{user.username}</h2>
                  {/* Display last message */}
                  <p className="text-gray-600">{user.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Main Chat Area */}
        <div className="flex-1">
          {selectedUser && (
            <>
              {/* Chat Header */}
              <header className="bg-white p-4 text-gray-700">
                <h1 className="text-2xl font-semibold">{selectedUser.username}</h1>
              </header>
              {/* Chat Messages */}
              <div className="h-screen overflow-y-auto p-4 pb-36">
                {messages && messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex mb-4 cursor-pointer ${message.sender.id === selectedUser.id ? '' : 'justify-end'}`}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                      <img
                        src={message.sender.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div className={`flex max-w-96 ${message.sender.id === selectedUser.id ? 'bg-white' : 'bg-indigo-500 text-white'} rounded-lg p-3 gap-3`}>
                      <p>{message.body}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                      <img
                        src={message.sender.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Chat Input */}
              <footer className="bg-white border-t border-gray-300 p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </footer>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Chats;
