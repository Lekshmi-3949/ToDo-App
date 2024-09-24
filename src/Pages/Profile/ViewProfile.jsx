import React, { useEffect, useState } from 'react';
import '../../css/ViewProfile.css'; // Optional: To add styling

const ViewProfile = () => {
  const [profile, setProfile] = useState(null);  // State to hold profile data
  const [loading, setLoading] = useState(true);  // State for loading indicator

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchProfileData = async () => {
      // Replace this with an actual API call if needed
      const profileData = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+91 12345 67890",
        address: "1234, Park Street, New Delhi",
        bio: "Software Developer with 5 years of experience in full-stack development."
      };

      // Simulating an API call delay
      setTimeout(() => {
        setProfile(profileData);
        setLoading(false);
      }, 1500);
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading Profile...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {profile && (
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
