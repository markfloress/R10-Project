import React from 'react';
import { Text, View, SectionList, TouchableHighlight, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment'

import styles from './styles'
import { colors } from '../../config/styles'
import { goToSession } from '../../lib/navigationHelper';

const iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'

const favedHeart = <Icon name={iconName} style={styles.faveIcon} size={25}/>

const Faves = ({faveList, currentNavigatorUID}) => {

  return(
    <View>
      <SectionList
        sections={faveList}
        renderItem={({item}) => {
          return(
            <TouchableHighlight underlayColor={colors.lightGrey} onPress={()=> goToSession(currentNavigatorUID, item)}>
              <View style={styles.indivSession}>
                <Text style={styles.sessionTitle}>{item.title}</Text>
                <Text style={styles.sessionLocation}>{item.location}</Text>
                {!faveList.indexOf(item.session_id) >-1 ? favedHeart : null}
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
              {moment.unix(section.title).format("h:mm A")}
            </Text>
          </View>}

      />
     </View>
  )
}

export default Faves