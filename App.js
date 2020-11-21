  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
      <View style={{padding: 10, justifyContent: 'center',
      flex: 1
  }}>
      <Image
        style={{height:100, width:'50%'}}
  source={{uri:'https://cdn.shopify.com/s/files/1/1691/9439/products/unnamed.jpg12_1400x.png?v=1578445483'}}
        />
 <Text>Hello World from Group 8 : Jānis Lapers</Text>
        </View>

    );
  }
