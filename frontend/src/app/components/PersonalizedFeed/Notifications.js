// components/Notifications.js
import { useState, useEffect } from "react";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the backend API
    axios
      .get(`/api/notifications/${userId}`) // Replace userId with actual user ID
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.content}</p>
            <p>Received at: {notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
