import React from 'react';
import { View } from 'react-native'

import styles from './styles'
import SessionList from '../../components/sectionList'

const Schedule = ({data, currentNavigatorUID}) => {
  
  return(   
        <View>
          <SessionList data={data} currentNavigatorUID={currentNavigatorUID}/>
        </View>
    )
}

export default Schedule