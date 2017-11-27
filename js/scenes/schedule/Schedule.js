import React from 'react';
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'
import SessionList from '../../components/sectionList'

const Schedule = ({data, faveList, isLoading}) => {

  if(isLoading){
    return <ActivityIndicator animating={true} size="small" color="red" />    
  } else {

  return(   
        <View>
          <SessionList data={data} currentNavigatorUID={'schedule'} faveList={faveList}/>
        </View>
    )
  }
}

export default Schedule