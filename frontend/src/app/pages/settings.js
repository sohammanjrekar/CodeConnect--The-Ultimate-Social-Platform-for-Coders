import React, { useState, useEffect } from "react";
import ProfileSettings from "../components/ProfileSettings";
import PrivacySettings from "../components/PrivacySettings";
import PasswordSettings from "../components/PasswordSettings";
import NotificationsSettings from "../components/NotificationsSettings";

const Settings = () => {
  const [user, setUser] = useState({});
  const [privacySettings, setPrivacySettings] = useState({});
  const [notificationSettings, setNotificationSettings] = useState({});

  useEffect(() => {
    // Fetch user, privacy settings, and notification settings data
    fetch("http://localhost:8000/api/users/1/") // Replace 1 with the user ID
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch("http://localhost:8000/api/users/1/privacy/") // Replace 1 with the user ID
      .then((response) => response.json())
      .then((data) => setPrivacySettings(data));

    fetch("http://localhost:8000/api/users/1/notifications/") // Replace 1 with the user ID
      .then((response) => response.json())
      .then((data) => setNotificationSettings(data));
  }, []);

  return (
    <div>
      <h1>Settings</h1>
      <ProfileSettings user={user} />
      <PrivacySettings privacySettings={privacySettings} />
      <PasswordSettings />
      <NotificationsSettings notificationSettings={notificationSettings} />
    </div>
  );
};

export default Settings;
