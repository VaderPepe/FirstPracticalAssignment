import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
      <View style={{padding: 10, justifyContent: 'center',
      flex: 1
  }}>
      <Image
        style={{height:200, width:'100%'}}
  source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FJHeaBh6wmWLY4b7sASU_AHaDt%26pid%3DApi&f=1'}}
        />
 <Text>Hello World from Group 8 : Ralfs Karlis Lapers</Text>
        </View>

    );
  }
