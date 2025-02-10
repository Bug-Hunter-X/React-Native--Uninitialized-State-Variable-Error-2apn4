// BugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUserName(data.name);
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View>
      {userName !== null ? (
        <Text>Welcome, {userName}!</Text>
      ) : (
        <Text>Loading user name...</Text>
      )}
    </View>
  );
};

export default MyComponent;