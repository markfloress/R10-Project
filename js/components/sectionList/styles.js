import { StyleSheet } from 'react-native'

import { colors, typography } from '../../config/styles'

export default StyleSheet.create({
  titleSeparator:{
    width: "100%",
  },

  titleSeparatorText:{
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: colors.lightGrey,
    fontFamily: typography.fontMainReg
  },
  
  sessionSeparator:{
    backgroundColor: colors.lightGrey,
    height: 1
  },

  indivSession:{
    padding: 15,
    paddingLeft: 15,
    width: '100%'
  },

  sessionTitle:{
    fontSize: 16,
    paddingBottom: 10,
    fontFamily: typography.fontMainReg
  },

  sessionLocation:{
    color: colors.medGrey,
    fontSize: 16,
    fontFamily: typography.fontMainReg
  },

  faveIcon:{
    color: colors.red,
    position: 'absolute',
    right: 15,
    bottom: 5
  }
})