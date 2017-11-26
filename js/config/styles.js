import { Platform } from 'react-native';

export const colors ={
  medGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a'
}

export const typography = {
    ...Platform.select({
      ios:{
        fontMainReg: 'Montserrat'
      },
      android:{
        fontMainReg: 'Montserrat-Regular'
      }
    }),

  fontMainLight: 'Montserrat-Light'
}