import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Gotta Catch... like, ... 20 of 'em!!</Text>
      <Link to="/pokemon">
        <Text style={ styles.linkButton }>View Pokemon</Text>
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
    marginTop: 50,
    marginBottom: 50,
  },
  textSize: {
    fontSize: 24,
    textAlign: 'center',
  },
  linkButton: {
    marginTop: 6,
    marginBottom: 6,
    textAlign: 'center',
    maxWidth: 120,
    fontSize: 18,
    padding: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: 'lime',
  },
  imageSize: {
    resizeMode: 'cover',
    width: 300,
    height: 300,
  },
});