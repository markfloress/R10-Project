import React from 'react';
import moment from 'moment'
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'

const Session = ({data}) => {
    console.log(data)
  return(
      <ScrollView>     
        <View>
          <Text> {data.location} </Text>
          <Text> {data.title} </Text>
          <Text> {moment.unix(data.title).format("h:mm a")} </Text>
          <Text> {data.description} </Text>
          <Text> {data.location} </Text>
        </View>
      </ScrollView>
    )
}

export default Session