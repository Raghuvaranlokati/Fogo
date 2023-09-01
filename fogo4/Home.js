import React, { useState } from 'react';
import { Share ,View, Text , ScrollView, TouchableOpacity, StyleSheet , Image, darkMode , Switch } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library you want to use



 
const HEADER_HEIGHT = '15%'; // Adjust this value as needed

const webLinks = [
  { title: 'call bomber', url: 'https://www.callbomberz.in/' },
  { title: 'sms bomber', url: 'https://greatonlinetools.com/smsbomber/' },
  { title: 'get phone details', url: 'https://iplogger.org/' },
  { title: 'hacker keyboad', url: 'https://hackertyper.net/' },
  { title: 'tor (dark web )', url: 'https://support.torproject.org/tbb/' },
  { title: 'whatsapp hack ', url: 'https://web.whatsapp.com/' },
 { title: 'fake name generator', url:'https://www.fakenamegenerator.com/'},
 { title: 'fake cards', url:'https://www.creditcardvalidator.org/'},
 { title: 'fake mail id', url:'https://temp-mail.org/'},
 { title: 'fake pan card', url:'https://adarshc.com/index/ent/document/pan/pan'},
 { title: 'upload pic & get social ids', url:'https://facecheck.id/'},
 { title: 'youtubeviews increse', url:'https://youtube-views.ytpremium35.repl.co/'},
 { title: 'snap hack (soon)', url:''}

  // Add more links as needed
];

const Home = ({ onLogout }) => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [webViewKey, setWebViewKey] = useState(0);
  const [darkMode, setDarkMode] = useState(false)

const toggleDarkMode = () => {
  try {
    console.log('Dark mode toggled');
    setDarkMode(!darkMode);
  } catch (error) {
    console.error('Error toggling dark mode:', error);
  }
};



  const renderWebView = (index) => {
    setSelectedLinkIndex(index);
  };

  const renderLinkList = () => {
    setSelectedLinkIndex(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you can clear any user session, reset state, etc.
    onLogout(); // Call the onLogout function provided as a prop
  };

  const handleRefresh = () => {
    if (selectedLinkIndex !== null) {
      // Increment the webViewKey to trigger a re-render of the WebView
      setWebViewKey(webViewKey + 1);
    }
  };

  const handleAPKShare = async () => {
    try {
      const apkFilePath = `${RNFetchBlob.fs.dirs.DownloadDir}/fogo.apk`; // Replace with your app's name
      const apkFileURL = `file://${apkFilePath}`;
  
      await RNFetchBlob.fs.cp('file:///data/app/your.app.package-1/base.apk', apkFilePath); // Replace with your app's package name
  
      const result = await Share.share({
        message: 'Check out and install this app!',
        url: apkFileURL,
        title: 'My Awesome App',
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.error('Error sharing app:', error);
    }
  };
  

 console.log('Dark mode state:', darkMode);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
        
      <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerIcon}>
    <Icon name={menuOpen ? 'times' : 'bars'} size={24} color="white" />
  </TouchableOpacity>
  <Image source={require('./assets/logo_transparent.png')} style={styles.appIcon} />
</View>

      {menuOpen ? ( // Conditional rendering for the menu items
        <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>VPN</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>Any video format can play</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>Video call (anonymous)</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>Torrent </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>Voice changer</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>join our  community </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={handleAppShare}>
  <Text style={styles.menuItemText}>Share App</Text>
</TouchableOpacity>
  <TouchableOpacity style={styles.menuItemWithBorder} onPress={this.handleMenuItemClick}>
    <Text style={styles.menuItemText}>all are coming soon </Text>
  </TouchableOpacity>
  
  {/* ...other menu items... */}
  
 <TouchableOpacity style={styles.menuItemWithBorder}>
    <Switch style={styles.darkModeSwitch} value={darkMode} onValueChange={toggleDarkMode} />
  </TouchableOpacity>


        {/* Add more menu items as needed */}
        {selectedLinkIndex === null && (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      )}
        
      </View>
      ) : (
        <ScrollView style={styles.body}>
          {selectedLinkIndex === null ? (
            webLinks.map((link, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => renderWebView(index)}
                style={[styles.cardContainer, { marginTop: -1 }]}
              >
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{link.title}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <>
            
            <TouchableOpacity onPress={renderLinkList} style={styles.backButton}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Icon name="refresh" size={24} color="white" />
        </TouchableOpacity>
            
            {selectedLinkIndex !== null && (
          <WebView
            key={webViewKey} // Add key prop to force re-render on change
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
     
    </View>
  );
}


const styles = StyleSheet.create({
  

    container: {
    flex: 1,
    backgroundColor: darkMode ? '#000' : '#fff',
  },

  header: {
    height: HEADER_HEIGHT,
   backgroundColor: darkMode ? '#333' : '#ADD8E6',

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
      hamburgerIcon: {
        marginRight: 10,
        marginBottom: -50,
      },
      menu: {
        backgroundColor: 'white',
        elevation: 5,
        zIndex: 2,
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        width: 250,
        height: '100%',
        
        
        paddingTop: 20,
        paddingBottom: 10,
      },
      menuItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
      },
      menuItemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
      },
    
      body: {
        flex: 1, 
      },
    cardContainer: {
      marginBottom: 10,
      paddingHorizontal: 15,
      marginTop: 10,
    },
    card: {
    backgroundColor: darkMode ? '#333' : '#EEEEEE', // Apply dark mode card color
    padding: 15,
    borderRadius: 5,
    elevation: 3,
  },
    cardTitle: {
      fontSize: 16,
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
    marginTop: 150,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logoutButtonHeader: {
    position: 'absolute',
    left:20,
    justifyContent:'flex-end',
    paddingVertical: 500,
    
    
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
  appIcon: {
    width: 48, // Increase the width for a larger circular icon
    height: 48, // Increase the height for a larger circular icon
    borderRadius: 24, // Set the border radius to half of the width/height to make it round
    resizeMode: 'cover',
    marginLeft:230,
    marginBottom:-50,
  },

  item: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

menuItemWithBorder: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Adjust the color as needed
  },

darkModeSwitch: {
  marginLeft: 'auto', // Pushes the switch to the right side
},
});
export default Home;