import React from "react";

const NotificationsSettings = ({ notificationSettings }) => {
  return (
    <div>
      <h2>Notification Preferences</h2>
      <label>
        Receive Email Notifications:{" "}
        <input type="checkbox" checked={notificationSettings.receiveEmails} />
      </label>
      <label>
        Receive Push Notifications:{" "}
        <input type="checkbox" checked={notificationSettings.receivePush} />
      </label>
      <button>Save Changes</button>
    </div>
  );
};

export default NotificationsSettings;
