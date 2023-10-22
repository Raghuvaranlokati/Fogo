import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from './firebase'; // Import the Firebase Authentication module

const avatars = [
  require('./assets/avatars/avatar1.png'), // Replace with your actual avatar paths
  require('./assets/avatars/avatar2.png'),
  require('./assets/avatars/avatar3.png'),
  require('./assets/avatars/avatar4.png'),
  // Add more avatars as needed
];

const ProfileEdit = () => {
  const navigation = useNavigation();

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from Firebase
    const user = firebase.auth().currentUser;

    if (user) {
      const name = user.displayName;

      setUserData({ name });
    }
  }, []);

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setAvatarModalVisible(false);
  };

  const updateProfile = () => {
    // Update the user's profile with the selected avatar and/or name
    const user = firebase.auth().currentUser;
    const updates = {};

    if (selectedAvatar) {
      updates.photoURL = selectedAvatar;
    }
    if (newName) {
      updates.displayName = newName;
    }

    user
      .updateProfile(updates)
      .then(() => {
        // Profile updated successfully
        Alert.alert('Success', 'Your profile has been updated successfully.', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Profile');
            },
          },
        ]);
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const openAvatarModal = () => {
    setAvatarModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={openAvatarModal}>
          {selectedAvatar ? (
            <Image source={selectedAvatar} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your new name"
        onChangeText={(text) => setNewName(text)}
        value={newName}
      />

      <Button title="Save Changes" onPress={updateProfile} />

      <Modal visible={avatarModalVisible} animationType="slide">
        <View style={styles.avatarModalContainer}>
          <FlatList
            data={avatars}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectAvatar(item)}>
                <Image source={item} style={styles.avatarThumbnail} />
              </TouchableOpacity>
            )}
            numColumns={3}
          />
          <Button title="Close" onPress={() => setAvatarModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgray', // Placeholder background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  avatarModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  avatarThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
});

export default ProfileEdit;
