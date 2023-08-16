import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const webLinks = [
  { title: 'call bomber', url: 'https://www.callbomberz.in/' },
  { title: 'sms bomber', url: 'https://greatonlinetools.com/smsbomber/' },
  { title: 'get phone details', url: 'https://iplogger.org/' },
  { title: 'hacker keyboad', url: 'https://hackertyper.net/' },
  { title: 'tor (dark web )', url: 'https://support.torproject.org/tbb/' },
  { title: 'whatsapp prank (soon)', url: '' },
  // Add more links as needed
];

export default function Home({ onLogout }) {
  const [selectedLinkIndex, setSelectedLinkIndex] = React.useState(null);
  const [showBackButton, setShowBackButton] = React.useState(false); // State to show/hide back button

  const renderWebView = (index) => {
    setSelectedLinkIndex(index);
    setShowBackButton(true);
  };

  const renderLinkList = () => {
    setSelectedLinkIndex(null);
    setShowBackButton(false);
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <View style={styles.container}>
      {selectedLinkIndex !== null ? null : (
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>fogo</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      {selectedLinkIndex === null ? (
        webLinks.map((link, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => renderWebView(index)}
            style={styles.linkButton}
          >
            <Text>{link.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <>
          {showBackButton && (
            <TouchableOpacity onPress={renderLinkList} style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          <WebView
            source={{ uri: webLinks[selectedLinkIndex].url }}
            style={styles.webView}
            onError={(error) => console.error('WebView Error:', error)}
          />
        </>
      )}
      {selectedLinkIndex !== null ? null : (
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/@white.hacker8')}
          style={styles.footerLink}
        >
          <Text style={styles.footerLinkText}>Visit our YouTube Channel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-top',
  },
  linkButton: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
    zIndex: 2,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  logoutButtonText: {
    color: 'lightblue',
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  navTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerLink: {
    alignItems: 'center',
    marginTop: 200,
  },
  footerLinkText: {
    color: 'blue',
    fontSize: 16,
  },
});
