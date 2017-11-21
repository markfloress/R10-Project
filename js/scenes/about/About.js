import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import styles from './styles'

const About = ({data, isLoading}) => {

  if(isLoading){
    return <ActivityIndicator animating={true} size="small" color="red" />
  } else {

    return(
      <ScrollView>
        <View style={{ width: '60%', flex:1, alignSelf: 'center'}}>
          <Image
            source={require('../../assets/images/r10_logo.png')}
            style={{ width: "100%", height: 250}}
            resizeMode={"contain"}
          />
        </View>        
        
        <View>
          <Text style={{ margin: 10 }}> R10 is a conference that focuses on just about any topic related to dev. </Text>
          <Text style={{ margin: 10 }}> Date & Venue </Text>
          <Text style={{ margin: 10 }}> The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC. </Text>
          <Text style={{ margin: 10 }}> Code of Conduct </Text>            
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => 
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>} 
           keyExtractor={(item) => item.title}
          />
        </View>
      </ScrollView>
    )
  }
}

export default About