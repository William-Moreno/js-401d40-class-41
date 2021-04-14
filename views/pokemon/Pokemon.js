import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from 'react-router-native';
import * as Speech from 'expo-speech';

export default function Pokemon() {

  let [pokemon, setPokemon] = useState([]);
  let [title, setTitle] = useState('bulbasaur');
  let [image, setImage] = useState('https://pokeapi.co/api/v2/pokemon/1/');
  

  const fetchPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    setPokemon(data.results);
  }

  useEffect(() => {
    fetchPokemon();
    }, []);

  const displayImage = (item) => {
    let tempUrl = { uri: item.url };
    let tempTitle = item.name;
    setImage(tempUrl);
    setTitle(tempTitle);
  }

  const speak = () => {
    const thingToSay = title;
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Text>Pokemon View!</Text>
      <Link to="/">
        {/* <Button title="Go Home" /> */}
        <Text>Go Home</Text>
      </Link>
      <FlatList
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Text onPress={() => displayImage(item)}>{item.name}</Text>}
      />
      <Image
        style={{
          resizeMode: 'cover',
          height: 100,
          width: 200,
        }}
        source={{image}}
      />
      <Button style={styles.activeSpace} onPress={speak} title={title} />
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
  },
    logo: {
    width: 66,
    height: 58,
  },
});