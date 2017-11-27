import { StyleSheet } from 'react-native'

import { colors, typography } from '../../config/styles'

export default StyleSheet.create({
  // Black background
  speakerContainer:{
    padding: 15,
    backgroundColor: 'black',
    paddingTop: 60,
    paddingBottom: 80
  },

  leaveIcon:{
    fontSize: 50,
    color: 'white',
    position: 'absolute',
    transform: [{translateX: -50}, {translateY: -50}],
    left: 60,
    top: 36
  },

  headerTitle:{
    color: 'white',
    fontSize: 18,
    fontFamily: typography.fontMainReg,
    alignSelf: 'center',
    marginBottom: 50
  },

  // White box
  speakerInfoContainer:{
    borderRadius: 5,
    padding: 15,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: 'white'
  },

  speakerImage:{
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 5
  },

  speakerName:{
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: typography.fontMainReg,
    marginTop: 15,
    marginBottom: 15
  },

  speakerBio:{
    fontSize: 16,
    fontFamily: typography.fontMainLight,
    lineHeight: 25
  },

  buttonHighlight:{
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  buttonGradient:{
    width: 200,
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 40
  },

  buttonText:{
    color: 'white',
    fontSize: 14,
    fontFamily: typography.fontMainReg
  }
})