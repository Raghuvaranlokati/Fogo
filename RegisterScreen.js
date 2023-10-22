import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from './firebase'; // Import your Firebase configuration

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');


  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please make sure your passwords match.");
      return;
    }

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = firebase.auth().currentUser;
        await user.updateProfile({
          displayName: name,
        });
        // Redirect to the home screen upon successful registration
        navigation.navigate('Home');
      } catch (error) {
        console.error(error);
        alert("Registration failed. Please check your input and try again.");
      }
      
  };

  const navigateToLogin = () => {
    // Redirect to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Create Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'white',
  },
  loginText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default RegisterScreen;
