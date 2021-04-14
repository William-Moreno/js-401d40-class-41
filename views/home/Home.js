import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.activeSpace}>Gotta Catch 'em All!!</Text>
      <Link to="/pokemon">
        <Text>View Pokemon</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSpace: {
    margin: 50,
  }
});