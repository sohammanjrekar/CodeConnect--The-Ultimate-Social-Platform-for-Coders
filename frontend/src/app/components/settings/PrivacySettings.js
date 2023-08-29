import React from "react";

const PrivacySettings = ({ privacySettings }) => {
  return (
    <div>
      <h2>Privacy Settings</h2>
      <label>
        Public Profile:{" "}
        <input type="checkbox" checked={privacySettings.isPublic} />
      </label>
      <label>
        Show Email:{" "}
        <input type="checkbox" checked={privacySettings.showEmail} />
      </label>
      <button>Save Changes</button>
    </div>
  );
};

export default PrivacySettings;
