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
  const [userConversations, setUserConversations] = useState({});
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 12;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [totalCounts, setTotalCounts] = useState({
    totalPosts: 0,
    totalSearchResults: 0,
  });

  useEffect(() => {
    // Fetch list of previously connected users
    fetchPreviouslyConnectedUsers();
  }, []);
  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleString('en-US', options);
  };
  
  // Function to fetch previously connected users
  const fetchPreviouslyConnectedUsers = () => {
    axios.get('http://localhost:8000/chats/previously-connected/1/')
      .then(response => {
        const conversationData = response.data;
        const userConvos = {};
        conversationData.forEach(conversation => {
          conversation.participants.forEach(userId => {
            if (!userConvos[userId]) {
              userConvos[userId] = [];
            }
            userConvos[userId].push(conversation.conversation_id);
          });
        });
        setUserConversations(userConvos);
        // Fetch usernames for each user ID
        const uniqueUserIds = Object.keys(userConvos);
        Promise.all(uniqueUserIds.map(userId => axios.get(`http://localhost:8000/account/users/${userId}/`)))
          .then(responses => {
            const users = responses.map(response => response.data);
            setUsers(users);
          })
          .catch(error => {
            console.error('Error fetching usernames:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching previously connected users:', error);
      });
  };

 // Function to find user info by user ID
const getUserInfo = (userId) => {
  const userInfo = users.find(user => user.id === userId);
  if (userInfo) {
    return userInfo;
  } else {
    console.error(`User with ID ${userId} not found`);
    return null; // Return null if user info not found
  }
};

const handleUserClick = (user) => {
  setSelectedUser(user);
  const conversationIds = userConversations[user.id];
  if (conversationIds && conversationIds.length > 0) {
    const conversationId = conversationIds[0]; // Assuming you want to use the first conversation ID
    setSelectedConversationId(conversationId); // Store the conversation ID in state
    axios.get(`http://localhost:8000/chats/conversations/${user.id}/${conversationId}/messages/`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  } else {
    // If no conversation ID exists, create a new conversation and set it as selected
    axios.post(`http://localhost:8000/chats/create-conversation/1/${user.id}/`)
      .then(response => {
        const { conversation_id } = response.data;
        setSelectedConversationId(conversation_id);
        // Retrieve messages for the newly created conversation
        axios.get(`http://localhost:8000/chats/conversations/${user.id}/${conversation_id}/messages/`)
          .then(response => {
            setMessages(response.data);
          })
          .catch(error => {
            console.error('Error fetching messages for new conversation:', error);
          });
      })
      .catch(error => {
        console.error('Error creating conversation:', error);
      });
  }
};


const handleSendMessage = () => {
  if (newMessage.trim() !== '' && selectedUser && selectedConversationId) {
    const requestBody = {
      sender: 1,
      body: newMessage
    };

    axios.post(`http://localhost:8000/chats/conversations/${selectedUser.id}/${selectedConversationId}/send/`, requestBody)
      .then(response => {
        // After successfully posting the message, fetch the updated messages
        axios.get(`http://localhost:8000/chats/conversations/1/${selectedConversationId}/messages/`)
          .then(response => {
            setMessages(response.data);
            setNewMessage('');
          })
          .catch(error => {
            console.error('Error fetching messages:', error);
          });
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  } else {
    console.error('Selected user or conversation ID not found');
  }
};
const handleSearch = async () => {
  setLoading(true);
  try {
    const apiUrl = `http://localhost:8000/account/users/?username=${searchQuery}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data = await response.json();
    if (data.users && Array.isArray(data.users)) { // Check if 'users' property exists and is an array
      setSearchResults(data.users); // Set searchResults to the array of users
      setTotalCounts(prevCounts => ({
        ...prevCounts,
        totalSearchResults: data.users.length,
      }));
    } else {
      throw new Error('Unexpected data structure: users is not an array');
    }
    setLoading(false);
    setPage(1);
  } catch (error) {
    console.error('Error searching blogs:', error);
    setError('Failed to search blogs');
    setLoading(false);
  }
};



useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    if (searchQuery.trim() !== '') {
      setSearchResults([]); // Clear previous search results
      handleSearch();
    }
  }, 500);

  return () => clearTimeout(delayDebounceFn);
}, [searchQuery]);
const handleSearchButtonClick = () => {
  if (searchQuery.trim() !== '') {
    setSearchResults([]); // Clear previous search results
    handleSearch();
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
  <Searchbar setSearchQuery={setSearchQuery} handleSearch={handleSearchButtonClick} />
  {/* Conditionally render search results if available, otherwise render users */}
  {searchQuery.trim() !== '' && searchResults.length > 0 ? (
    searchResults.map(user => (
      <div
        key={user.id}
        className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md ${selectedUser && selectedUser.id === user.id ? 'bg-gray-200' : ''}`}
        onClick={() => handleUserClick(user)}
      >
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
          <img
            src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/User/${user.avatar}`}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{user.first_name}  {user.last_name}</h2>
        </div>
      </div>
    ))
  ) : (
    // Render users if there are no search results or search query is empty
    users.filter(user => user.id !== 1).map(user => (
      <div
        key={user.id}
        className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md ${selectedUser && selectedUser.id === user.id ? 'bg-gray-200' : ''}`}
        onClick={() => handleUserClick(user)}
      >
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
          <img
            src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/User/${user.avatar}`}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{user.first_name}  {user.last_name}</h2>
        </div>
      </div>
    ))
  )}
</div>

        </div>
        {/* Main Chat Area */}
        <div className="flex-1">
          {selectedUser && (
            <>
              {/* Chat Header */}
              <header className="p-4 text-white bg-gradient-to-tr from-indigo-600 to-green-600 hover:shadow-lg flex items-center">
  <img
    src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/User/${selectedUser.avatar}`}
    alt="User Avatar"
    className="w-12 h-12 rounded-full mr-3"
  />
  <div className="flex flex-col">
    <h2 className="text-lg font-semibold">{selectedUser.first_name} {selectedUser.last_name}</h2>
  </div>
</header>


              {/* Chat Messages */}
              <div className="h-screen overflow-y-auto p-4 pb-36">
                {messages && messages.map(message => (
                 <div
                 key={message.id}
                 className={`flex mb-4 cursor-pointer ${
                   message.sender === selectedUser.id ? '' : 'justify-end'
                 }`}
               >
                 <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                   <img
                     src={`https://res.cloudinary.com/dp6odhftt/image/upload/v1713866701/User/${getUserInfo(message.sender)?.avatar}`}
                     alt="User Avatar"
                     className="w-8 h-8 rounded-full"
                   />
                 </div>
                 <div
                   className={`flex max-w-96 ${
                     message.sender === selectedUser.id ? 'bg-green-200' : 'bg-indigo-500 text-white'
                   } rounded-lg p-3 gap-3`}
                 >
                   <p>{message.body}</p>
                   <p className="text-sm text-gray-500">{formatDateTime(message.timestamp)}</p>
   
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
