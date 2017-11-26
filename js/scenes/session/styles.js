import { StyleSheet } from 'react-native'

import { colors, typography } from '../../config/styles'

export default StyleSheet.create({
  scrollContainer:{
    height: '100%',
    padding: 25
  },

  faveIcon:{
    color: colors.red,
    position: 'absolute',
    right: 0,
    top: 0
  },

  locationStyle:{
    width: 200,
    color: colors.medGrey,
    marginBottom: 15,
    fontSize: 18,
    fontFamily: typography.fontMainReg
  },

  titleStyle:{
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: typography.fontMainReg
  },

  timeStyle:{
    color: colors.red,
    fontSize: 18,
    marginBottom: 15,
    fontFamily: typography.fontMainReg
  },

  descriptionStyle:{
    fontSize: 18,
    marginBottom: 30,
    fontFamily: typography.fontMainLight,
    lineHeight: 30
  },

  presentedStyle:{
    color: colors.medGrey,
    fontSize: 20,
    fontFamily: typography.fontMainReg,
    marginBottom: 15
  },

  speakerImage:{
    width: 75,
    height: 75,
    borderRadius: 35
  },

  speakerStyle:{
    fontSize: 18,
    fontFamily: typography.fontMainReg
  },

  buttonSeparator:{
    height: 2,
    backgroundColor: colors.lightGrey
  },

  faveButtonStyle:{
    height: 20,
    width: 20,
    backgroundColor: 'purple',
    padding: 20,
    color: 'white'
  }
})