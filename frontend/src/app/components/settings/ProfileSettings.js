import React from "react";

const ProfileSettings = ({ user }) => {
  return (
    <div>
      <h2>Profile Settings</h2>
      <p>Welcome, {user.username}!</p>
      <label>
        Name: <input type="text" defaultValue={user.name} />
      </label>
      <label>
        Email: <input type="email" defaultValue={user.email} />
      </label>
      <button>Save Changes</button>
    </div>
  );
};

export default ProfileSettings;
