import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

import styles from './styles'
import SessionList from '../../components/sectionList'

const Schedule = ({data}) => {
  
  return(   
        <View>
          {/* <Text style={{ margin: 10 }}> THIS IS FROM Schedule. </Text> */}
          <SessionList data={data} />
        </View>
    )
}

export default Schedule