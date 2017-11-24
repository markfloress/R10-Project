import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'

const Faves = ({faves}) => {
  console.log('faves', faves)



  return(
      <ScrollView>     
        
        <View>
          <Text style={{ margin: 10 }}> THIS IS FROM Faves. </Text>
        </View>

      </ScrollView>
    )
}

export default Faves