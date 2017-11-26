import React from 'react'
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Platform
} from 'react-native'
import moment from 'moment'

import styles from './styles'
import { goToSession } from '../../lib/navigationHelper';
import Icon from 'react-native-vector-icons/Ionicons';

const iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'

const SessionList = ({data, currentNavigatorUID}) => (
  <View>
  <SectionList
    renderItem={({item}) => {
      return(
        <TouchableHighlight onPress={()=> goToSession(currentNavigatorUID, item)}>
          <View style={styles.indivSession}>
            <Text style={styles.sessionTitle}>{item.title}</Text>
            <Text style={styles.sessionLocation}>{item.location}</Text>
            <Icon name={iconName} style={styles.faveIcon} size={25}/>
          </View>
        </TouchableHighlight>
      )
    }}

    ItemSeparatorComponent={()=> 
      <View style={styles.sessionSeparator}>
      </View>
    }

    renderSectionHeader={({section}) => 
      <View style={styles.titleSeparator}>
        <Text style={styles.titleSeparatorText}>
          {moment.unix(section.title).format("h:mm a").toUpperCase()}
        </Text>
      </View>}
    sections={data}
  />
  </View>
)

export default SessionList