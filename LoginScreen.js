import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from './firebase';
import { FontAwesome } from 'react-native-vector-icons';
import Constants from 'expo-constants'; // Import Constants for app version

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  // State for app version
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    // Get the app version when the component mounts
    setAppVersion(Constants.manifest.version);
  }, []);

  const handleLogin = async () => {
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const navigateToRegistration = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.versionText}>App Version: {appVersion}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.eyeButton}>
              <FontAwesome
                name={secureTextEntry ? 'eye' : 'eye-slash'}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={navigateToRegistration}>
            <Text style={styles.registerText}>Don't have an account? Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  eyeButton: {
    padding: 10,
  },
  versionText: {
    marginTop: 10, // Move the version text to the bottom
    fontSize: 16,
    color: 'gray',
  },
  registerText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
