import React from 'react';
import moment from 'moment'
import { Text, View, ScrollView, Image, TouchableHighlight } from 'react-native'
import styles from './styles'
import { goToSpeaker } from '../../lib/navigationHelper'

const Session = ({data, speaker}) => {
  return(
      <ScrollView>     
        <View>
          <Text> {data.location} </Text>
          <Text> {data.title} </Text>
          <Text> {moment.unix(data.title).format("h:mm a")} </Text>
          <Text> {data.description} </Text>
          <Text> {data.location} </Text>
        </View>

        <TouchableHighlight onPress={()=> goToSpeaker({speaker})}>
        <View>
          <Text> Presented by: </Text>
          <Image style={{width: 50, height: 50, borderRadius: 25}} source={{uri: `${speaker.image}`}} />
          <Text> {speaker.name} </Text>          
        </View>
        </TouchableHighlight>
      </ScrollView>
    )
}

export default Session