import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'

const Speaker = () => {
  
  return(
      <ScrollView>     
        
        <View>
          <Text style={{ margin: 10 }}> THIS IS FROM Speaker. </Text>
          {/* <Text style={{ margin: 10 }}> Date & Venue </Text>
          <Text style={{ margin: 10 }}> The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC. </Text>
          <Text style={{ margin: 10 }}> Code of Conduct </Text>             */}
        </View>

      </ScrollView>
    )
}

export default Speaker