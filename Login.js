import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; // Import Alert from react-native

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (username === 'user123' && password === 'pass123') {
      setLoginError(false);
      onLogin(); // Call the onLogin function provided as a prop
    } else {
      setLoginError(true);
      Alert.alert('Login Failed', 'Invalid username or password'); // Show an alert when login fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      {loginError && <Text style={styles.errorText}>Invalid username or password</Text>}
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.noteText}>Note: 'user123' as username and 'pass123' as password </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 12,
    marginTop: 10,
    color: '#888',
    textAlign: 'center',
  },
});
