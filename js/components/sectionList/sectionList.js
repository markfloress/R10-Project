import React from 'react'
import {
  Text,
  View,
  SectionList
} from 'react-native'
import moment from 'moment'
// import styles from './styles'

const SessionList = ({data}) => (
  <View>
  <SectionList
    renderItem={({item}) => {
      return(
        <View>
          <Text>{item.title}</Text>
          <Text>{item.location}</Text>
        </View>
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