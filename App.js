import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { checkconnected } from './functions';
import NoNetwork from './screens/NoNetwork';

export default function App() {
  const [connectStatus, setConnectStatus] = useState(false)
  checkconnected().then(res=>{
    setConnectStatus(res)
  })
  return (
    connectStatus?(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>) : (<NoNetwork/>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
