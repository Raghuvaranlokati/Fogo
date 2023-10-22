import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';
import HamburgerMenu from './HamburgerMenu';
import Profile from './Profile';

const webLinks = [
  { title: 'call bomber', url: 'https://www.callbomberz.in/' },
  { title: 'sms bomber', url: 'https://greatonlinetools.com/smsbomber/' },
  { title: 'get phone details', url: 'https://grabify.link/' },
  { title: 'hacker keyboad', url: 'https://hackertyper.net/' },
  { title: 'tor (dark web)', url: 'https://support.torproject.org/tbb/' },
  { title: 'whatsapp hack', url: 'https://web.whatsapp.com/' },
  { title: 'fake name generator', url: 'https://www.fakenamegenerator.com/' },
  { title: 'fake cards', url: 'https://www.creditcardvalidator.org/' },
  { title: 'fake mail id', url: 'https://temp-mail.org/' },
  { title: 'fake pan card', url: 'https://adarshc.com/index/ent/document/pan/pan' },
  { title: 'upload pic & get social ids', url: 'https://facecheck.id/' },
  { title: 'youtube views increase', url: 'https://youtube-views.ytpremium35.repl.co/' },
  { title: 'snap', url: 'https://www.snapchat.com/?original_referrer=www.google.com' },
  { title: 'Live cctv', url: 'http://www.insecam.org/en/bycountry/IN/' },
 {title: 'check your password exposed' , url:  'https://haveibeenpwned.com/'},
 {title: 'check virus' , url:  'https://www.virustotal.com/gui/home/upload'},

];

const Home = ({ navigation, onLogout }) => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [webViewKey, setWebViewKey] = useState(0);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    onLogout();
  };

  const openProfile = () => {
    // Use navigation to navigate to the 'Profile' screen
    navigation.navigate('Profile');
  };

  const renderWebView = (index) => {
    setSelectedLinkIndex(index);
  };

  const renderLinkList = () => {
    setSelectedLinkIndex(null);
    setProfileOpen(false);
  };

  const handleRefresh = () => {
    if (selectedLinkIndex !== null) {
      setWebViewKey(webViewKey + 1);
    }
  };

  return (
    <View style={styles.container}>
      {selectedLinkIndex === null && (
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerIcon}>
            <Icon name={menuOpen ? 'times' : 'bars'} size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openProfile} style={styles.profileIcon}>
            <Icon name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
      {menuOpen ? (
        <HamburgerMenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          handleLogout={onLogout}
        />
      ) : (
        <ScrollView style={styles.body}>
          {selectedLinkIndex === null ? (
            <View style={styles.linkContainer}>
              {webLinks.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => renderWebView(index)}
                  style={styles.cardContainer}
                >
                  <View style={styles.card}>
                    <Text style={styles.cardTitle}>{link.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <>
              <TouchableOpacity onPress={renderLinkList} style={styles.backButton}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
                <Icon name="refresh" size={30} color="white" />
              </TouchableOpacity>
              {selectedLinkIndex !== null && (
                <WebView
                  key={webViewKey}
                  source={{ uri: webLinks[selectedLinkIndex].url }}
                  style={styles.webView}
                  onError={(error) => console.error('WebView Error:', error)}
                  userAgent="Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0"
                />
              )}
            </>
          )}
        </ScrollView>
      )}
      {isProfileOpen && (
        <Profile onLogout={onLogout} closeProfile={() => setProfileOpen(false)} />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ADD8E6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    height: '15%',
  },
  hamburgerIcon: {
    marginRight: 10,
    marginBottom: -50,
  },
  profileIcon: {
    marginLeft: 'auto',
    marginRight: 20,    // Adds space between profile icon and right edge
    marginBottom: -50,

  },
  body: {
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '49%',
    height: 150,
    marginBottom: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    borderRadius: 5,
    elevation: 3,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
  },
  webView: {
    flex: 1,
    height: 3000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  refreshButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
});

export default Home;