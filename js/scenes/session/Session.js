import React from 'react'
import moment from 'moment'
import { Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, Button, Platform } from 'react-native'
import styles from './styles'
import { goToSpeaker } from '../../lib/navigationHelper'

import { addFave } from '../../config/models'
import { deleteFave } from '../../config/models'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient'

const Session = ({data, speaker, faveList}) => {

  const favedHeart = <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} style={styles.faveIcon} size={25}/>

  return(
      <ScrollView style={styles.scrollContainer}>

        {faveList.indexOf(data.session_id) >-1 ? favedHeart : null}

        <View>
          <Text style={styles.locationStyle}>{data.location}</Text>
          <Text style={styles.titleStyle}>{data.title}</Text>
          <Text style={styles.timeStyle}>{moment.unix(data.start_time).format("h:mm A")}</Text>
          <Text style={styles.descriptionStyle}>{data.description}</Text>
        </View>

        {speaker ? <TouchableHighlight underlayColor={colors.lightGrey} onPress={()=> goToSpeaker({speaker})}>

          <View>
            <Text style={styles.presentedStyle}> Presented by: </Text>
            <View style={styles.speakerContainer}>
              <Image style={styles.speakerImage} source={{uri: `${speaker.image}`}}/>
              <Text style={styles.speakerStyle}> {speaker.name} </Text>
            </View>
          </View>
        </TouchableHighlight> : null}

        <View style={styles.buttonSeparator}></View>

        <LinearGradient
          start={{x: 0.9, y: 0}} 
          end={{x: 0.3, y: 1.0}}
          locations={[0,1]}
          colors={[colors.blue, colors.purple]}
          style={styles.buttonGradient}>
          <TouchableOpacity style={styles.buttonHighlight} onPress={faveList.indexOf(data.session_id) >-1 ? () => deleteFave(data.session_id) : () => addFave(data.session_id)}>
            <Text style={styles.buttonText}> {faveList.indexOf(data.session_id) >-1 ? 'Remove from Faves' : 'Add to Favourites'} </Text>
          </TouchableOpacity>
        </LinearGradient>

      </ScrollView>
    )
}

export default Session