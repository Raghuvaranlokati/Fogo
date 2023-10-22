import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from './firebase'; // Import the Firebase Authentication module
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const avatars = [
  require('./assets/avatars/avatar1.png'), // Replace with your actual avatar paths
  require('./assets/avatars/avatar2.png'),
  require('./assets/avatars/avatar3.png'),
  require('./assets/avatars/avatar4.png'),
  // Add more avatars as needed
];

const Profile = () => {
  const navigation = useNavigation();

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from Firebase
    const user = firebase.auth().currentUser;

    if (user) {
      const name = user.displayName;
      const email = user.email;

      setUserData({ name, email });
    }

    // Load the selected avatar from AsyncStorage on component mount
    AsyncStorage.getItem('selectedAvatar').then((avatar) => {
      if (avatar) {
        setSelectedAvatar(JSON.parse(avatar));
      }
    });
  }, []);

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setAvatarModalVisible(false);

    // Save the selected avatar to AsyncStorage
    AsyncStorage.setItem('selectedAvatar', JSON.stringify(avatar)).then(() => {
      // Avatar saved successfully
    });

    // Update the user's profile with the selected avatar
    firebase
      .auth()
      .currentUser.updateProfile({
        photoURL: avatar,
      })
      .then(() => {
        // Profile updated successfully
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
      });
  };

  const openProfileEdit = () => {
    navigation.navigate('ProfileEdit');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
          {selectedAvatar ? (
            <Image source={selectedAvatar} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>User Profile</Text>

      <Text style={styles.userInfo}>
        Name: {userData?.name}
      </Text>

      <Text style={styles.userInfo}>
        Email: {userData?.email}
      </Text>

      <Button title="Edit Profile" onPress={openProfileEdit} />

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
  userInfo: {
    fontSize: 18,
    marginTop: 10,
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

export default Profile;
