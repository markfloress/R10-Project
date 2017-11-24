import React from 'react';
import { View } from 'react-native'

import styles from './styles'
import SessionList from '../../components/sectionList'

const Schedule = ({data}) => {
  console.log(data.map(x => x.data.map(y => y.location)))
  
  return(   
        <View>
          <SessionList data={data} currentNavigatorUID={'schedule'}/>
        </View>
    )
}

export default Schedule