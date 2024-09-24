import React, { useState } from 'react';
import "../css/LogOutPopUp.css"

const LogoutPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const confirmLogout = () => {
    setShowPopup(false);
    
    console.log('Logged out');
  };

  const cancelLogout = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleLogoutClick}>Logout</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Are you sure you want to logout?</h3>
            <button onClick={confirmLogout}>Yes</button>
            <button onClick={cancelLogout}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutPopup;
