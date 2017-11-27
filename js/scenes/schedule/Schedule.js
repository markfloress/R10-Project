import React from 'react';
import { View, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'
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

Schedule.propTypes = {
  data: PropTypes.any.isRequired,
  faveList: PropTypes.array.isRequired,
  isLoading: PropTypes.any.isRequired
}

export default Schedule