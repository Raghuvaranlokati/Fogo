import React from 'react';
import { View } from 'react-native';
import Login from './Login';
import Home from './Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </View>
  );
};

export default App;