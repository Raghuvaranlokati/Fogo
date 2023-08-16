import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './Login';
import Home from './Home';
import LoadingScreen from './LoadingScreen'; // Import your loading screen component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleLogin = () => {
    setIsLoading(true); // Show loading screen
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false); // Hide loading screen
    }, 2000); // Simulated delay of 2 seconds
    
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Render loading screen while isLoading is true */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        // Render Home or Login components based on isLoggedIn state
        isLoggedIn ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />
      )}
    </View>
  );
};

export default App;

 