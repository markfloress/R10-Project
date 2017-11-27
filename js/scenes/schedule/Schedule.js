import React from 'react';
import { View } from 'react-native'

import styles from './styles'
import SessionList from '../../components/sectionList'

const Schedule = ({data, faveList}) => {
  
  return(   
        <View>
          <SessionList data={data} currentNavigatorUID={'schedule'} faveList={faveList}/>
        </View>
    )
}

export default Schedule