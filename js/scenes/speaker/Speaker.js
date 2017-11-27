import React from 'react';
import { Text, View, ScrollView, Image, Platform, TouchableOpacity, Linking} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../config/styles'

const Speaker = ({speaker, goBack}) => {

  return(
      <ScrollView style={styles.speakerContainer}>

        <View>
          <Icon onPress={()=> goBack()} name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} style={styles.leaveIcon} size={25}/>
          <Text style={styles.headerTitle}> About the Speaker </Text>
        </View>

        <View style={styles.speakerInfoContainer}>
          <Image style={styles.speakerImage} source={{uri: `${speaker.image}`}} />
          <Text style={styles.speakerName}>{speaker.name}</Text>
          <Text style={styles.speakerBio}>{speaker.bio}</Text>
          
          <LinearGradient
            start={{x: 0.9, y: 0}} 
            end={{x: 0.3, y: 1.0}}
            locations={[0,1]}
            colors={[colors.blue, colors.purple]}
            style={styles.buttonGradient}>
          <TouchableOpacity style={styles.buttonHighlight} onPress={() => Linking.openURL(speaker.url)}>
            <Text style={styles.buttonText}> Read More on Wikipedia </Text>
          </TouchableOpacity>
        </LinearGradient>
        </View>

      </ScrollView>
    )
}

export default Speaker