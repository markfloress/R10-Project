import React from 'react'
import {
  Text,
  View,
  SectionList,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
// import styles from './styles'
import { goToSession } from '../../lib/navigationHelper';
import Icon from 'react-native-vector-icons/Ionicons';

const SessionList = ({data, currentNavigatorUID}) => (
  <View>
  <SectionList
    renderItem={({item}) => {
      return(
        <TouchableHighlight onPress={()=> goToSession(currentNavigatorUID, item)}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
            <Icon name='ios-heart-outline' color= "black" size={25}/>
          </View>
        </TouchableHighlight>
      )
    }}

    ItemSeparatorComponent = {()=>{
      return (
        <View
          // style={styles.separator}
        />
      )
    }}

    renderSectionHeader={({section}) => 
      <Text>
        {moment.unix(section.title).format("h:mm a")}
      </Text>}
    sections={data}
  />
  </View>
)

export default SessionList