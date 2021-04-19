import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
;

import PokeDex from './views/pokemon/Pokemon.js';
import Home from './views/home/Home.js';

export default function App() {



  return (
    <View style={styles.container}>
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