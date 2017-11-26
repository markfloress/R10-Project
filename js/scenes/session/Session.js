import React from 'react'
import moment from 'moment'
import { Text, View, ScrollView, Image, TouchableHighlight, Button, Platform } from 'react-native'
import styles from './styles'
import { goToSpeaker } from '../../lib/navigationHelper'

import { addFave } from '../../config/models'
import Icon from 'react-native-vector-icons/Ionicons'

const Session = ({data, speaker}) => {

  const iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'

  return(
      <ScrollView style={styles.scrollContainer}>  

        <Icon name={iconName} style={styles.faveIcon} size={25}/>

        <View>
          <Text style={styles.locationStyle}>{data.location}</Text>
          <Text style={styles.titleStyle}>{data.title}</Text>
          <Text style={styles.timeStyle}>{moment.unix(data.start_time).format("h:mm A")}</Text>
          <Text style={styles.descriptionStyle}>{data.description}</Text>
        </View>

        <TouchableHighlight onPress={()=> goToSpeaker({speaker})}>
        <View>
          <Text style={styles.presentedStyle}> Presented by: </Text>
          <Image style={styles.speakerImage} source={{uri: `${speaker.image}`}} />
          <Text style={styles.speakerStyle}> {speaker.name} </Text>          
        </View>
        </TouchableHighlight>

        <View style={styles.buttonSeparator}></View>

        <Button
          onPress={() => addFave(data.session_id)}
          title='Add to Favourites'
          style={styles.faveButtonStyle}
        />
      </ScrollView>
    )
}

export default Session