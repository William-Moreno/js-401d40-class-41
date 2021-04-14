import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as Speech from 'expo-speech';

import PokeDex from './views/pokemon/Pokemon.js';
import Home from './views/home/Home.js';



export default function App() {

  const [ location, setLocation ] = useState(null);




  const speak = () => {
    const thingToSay = "...and again...";
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      {/* <Button style={styles.activeSpace} title="Press to hear some words" onPress={speak} /> */}
      <NativeRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokemon">
          <PokeDex />
        </Route>
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSpace: {
    marginTop: 50,
    marginBottom: 50,
  }
});