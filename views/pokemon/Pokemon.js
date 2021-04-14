import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Link } from 'react-router-native';
import * as Speech from 'expo-speech';
import Pokemon from 'pokemon-images';

export default function PokeDex() {

  let [pokemon, setPokemon] = useState([]);
  let [title, setTitle] = useState('beedrill');
  let [image, setImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png');
  let tempUrl;
  let tempId;
  

  const fetchPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let data = await response.json();
    setPokemon(data.results);
  }

  useEffect(() => {
    fetchPokemon();
    }, []);

  const displayImage = (item) => {
    const idArray = item.url.split('');
        const trimId = idArray.splice(34,5);
        trimId.pop();
        const idNumber = trimId.join('');
    tempUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idNumber}.png`;
    setImage(tempUrl);
    setTitle(item.name);
  }

  const speak = () => {
    const thingToSay = title;
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Text style={ styles.textSize }>Pokemon View!</Text>
      <Link to="/">
        {/* <Button title="Go Home" /> */}
        <Text style={ styles.linkButton }>Go Home</Text>
      </Link>
      <FlatList
        style={{ backgroundColor: 'lightblue'}}
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Text style={ styles.textSize } onPress={() => displayImage(item)}>{item.name}</Text>}
      />
      <Image style={ styles.imageSize } source={{ uri: image }} />
      <Button style={styles.activeSpace} onPress={speak} title="Say my name" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSpace: {
    marginTop: 50,
    marginBottom: 32,
  },
  textSize: {
    fontSize: 24,
    textAlign: 'center',
  },
  linkButton: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 'auto',
    marginRight: 'auto',
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