import React from "react";

const PasswordSettings = () => {
  return (
    <div>
      <h2>Password Settings</h2>
      <label>
        Current Password: <input type="password" />
      </label>
      <label>
        New Password: <input type="password" />
      </label>
      <label>
        Confirm New Password: <input type="password" />
      </label>
      <button>Change Password</button>
    </div>
  );
};

export default PasswordSettings;
