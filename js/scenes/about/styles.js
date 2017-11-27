import { StyleSheet } from 'react-native'

import { colors, typography } from '../../config/styles'

export default StyleSheet.create({
  // About Container styles
  aboutContainer:{
    padding: 15
  },

  // About styles
  titleSeparatorText:{
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: colors.lightGrey,
    fontFamily: typography.fontMainReg
  },

  logoContainer:{
    width: '60%',
    alignSelf: 'center'
  },

  r10Logo:{
    width: '100%',
    height: 100
  },

  logoSeparator:{
    height: 1,
    backgroundColor: colors.lightGrey
  },

  aboutText:{
    fontSize: 16,
    lineHeight: 25,    
    fontFamily: typography.fontMainLight,
    marginTop: 10,
    marginBottom: 10
  },

  aboutTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: typography.fontMainReg,
    marginTop: 10,
    marginBottom: 10
  },

  // Conduct styles
  conductTitle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15
  },

  conductIcon:{
    color: colors.purple
  },

  conductText:{
    fontSize: 18,
    marginLeft: 10,
    color: colors.purple,
    fontFamily: typography.fontMainReg
  },

  conductDescription:{
    fontSize: 16,
    fontFamily: typography.fontMainLight,
    lineHeight: 25
  }
})