import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'

const Speaker = ({speaker}) => {
  console.log(speaker)
  return(
      <ScrollView>     
        
        <View>
          <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri: `${speaker.image}`}} />
          <Text> {speaker.name} </Text>
          <Text> {speaker.bio} </Text>
          {/* <Text> hi </Text> */}
        </View>

      </ScrollView>
    )
}

export default Speaker