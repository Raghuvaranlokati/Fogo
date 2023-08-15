import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const webLinks = [
  { title: 'call bomber', url: 'https://www.callbomberz.in/' },
  { title: 'sms bomber', url: 'https://greatonlinetools.com/smsbomber/' },
  { title: 'get phone details', url: 'https://iplogger.org/' },
  { title: 'hacker keyboad', url: 'https://hackertyper.net/' },
  { title: 'tor (dark web )', url: 'https://support.torproject.org/tbb/' },
  { title: 'whatsapp prank (soon)', url: ''  },

  // Add more links as needed
];

export default function Home({ onLogout }) {
  const [selectedLinkIndex, setSelectedLinkIndex] = React.useState(null);

  const renderWebView = (index) => {
    setSelectedLinkIndex(index);
  };

  const renderLinkList = () => {
    setSelectedLinkIndex(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you can clear any user session, reset state, etc.
    onLogout(); // Call the onLogout function provided as a prop
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
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
            <TouchableOpacity onPress={renderLinkList} style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <WebView
              source={{ uri: webLinks[selectedLinkIndex].url }}
              style={styles.webView}
              onError={(error) => console.error('WebView Error:', error)}
            />
          </>
        )}
      </ScrollView>
      {selectedLinkIndex === null && (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkButton: {
    backgroundColor: '#EEEEEE',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  webView: {
    flex: 1,
    height: 3000, // Adjust the height as needed
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
  logoutButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
