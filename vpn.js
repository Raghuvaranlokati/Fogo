import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const VPNScreen = () => {
  const [mobileName, setMobileName] = useState('');
  const [error, setError] = useState(null);
  
  const handleRetryConnection = () => {
    // Add your code here to retry the VPN connection.
  };

  useEffect(() => {
    // Fetch the mobile name when the component mounts
    fetchMobileName();
  }, []);

  const fetchMobileName = async () => {
    try {
      const response = await fetch('URL_TO_FETCH_MOBILE_NAME');
      
      if (!response.ok) {
        throw new Error(`Network request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setMobileName(data.name);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {mobileName && <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{mobileName}</Text>}
      <Text style={{ margin: 20 }}>VPN Connection Failed</Text>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text style={{ margin: 20 }}>Please check your network settings and try again.</Text>
      <Button title="Retry Connection" onPress={handleRetryConnection} />
    </View>
  );
};

export default VPNScreen;
