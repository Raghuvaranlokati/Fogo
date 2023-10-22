import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from './firebase';
import VPNScreen from './vpn'; // Import the VPN screen component
import AnyVideoScreen from './Anyvideo'; // Import the Any Video screen component
import TorrentScreen from './Torrent'; // Import the Torrent screen component
import Anyvideo from './Anyvideo';

const HamburgerMenu = ({ menuOpen, toggleMenu }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleMenuItemClick = (screenName) => {
    switch (screenName) {
      case 'VPN':
        navigation.navigate('vpn');
        break;
        case 'join':
          navigation.navigate('Anyvideo')
          break;
      case 'Torrent':
        navigation.navigate('Torrent');
        break;
        case 'Community':
          navigation.navigate('Community');
          break;
          case 'join':
          navigation.navigate('join');
          break;
          case 'News':
        navigation.navigate('News');
        break;
         
      // Add other menu items in a similar way
    }
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
        <Icon name="close" size={30} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItemWithBorder} onPress={() => handleMenuItemClick('VPN')}>
        <Text style={styles.menuItemText}>VPN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItemWithBorder} onPress={() => handleMenuItemClick('Anyvideo')}>
        <Text style={styles.menuItemText}>VideoFormat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItemWithBorder} onPress={() => handleMenuItemClick('Torrent')}>
        <Text style={styles.menuItemText}>Torrent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItemWithBorder} onPress={() => handleMenuItemClick('Community')}>
        <Text style={styles.menuItemText}>Community</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItemWithBorder} onPress={() => handleMenuItemClick('News')}>
        <Text style={styles.menuItemText}> dark News</Text>
      </TouchableOpacity>
      
    
      {/* Add other menu items in a similar way */}
      {menuOpen && (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    elevation: 5,
    zIndex: 2,
    position: 'absolute',
    left: 0,
    width: 250,
    height: '100%',
    paddingTop: 20,
    paddingBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  menuItemWithBorder: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 150,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HamburgerMenu;
