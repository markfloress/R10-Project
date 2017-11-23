import { Platform } from 'react-native';

export const colors ={
  medGray: "#999999"
}

export const typography = {
    ...Platform.select({
      ios:{
        fontMainReg: "Montserrat"
      },
      android:{
        fontMainReg: "Montserrat-Regular"
      }
    }),

  fontMainLight: "Montserrat-Light"
}