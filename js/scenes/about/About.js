import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

import styles from './styles'
import ConductItem from './ConductItem'

const About = ({data, isLoading}) => {

  let key = 0

  if(isLoading){
    return <ActivityIndicator animating={true} size="small" color="red" />
  } else {

    return(
      <ScrollView style={styles.aboutContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/r10_logo.png')}
            style={styles.r10Logo}
            resizeMode={"contain"}
          />
        </View>
        
        <View style={styles.logoSeparator}></View>

        <View>
          <Text style={styles.aboutText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
          <Text style={styles.aboutTitle}>Date & Venue</Text>
          <Text style={styles.aboutText}>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
          <Text style={styles.aboutTitle}>Code of Conduct</Text>
        </View>

        <View>
          {data.map(x => {
            return (
              <View key={key++}>
                <ConductItem data={x}/>
              </View>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

export default About