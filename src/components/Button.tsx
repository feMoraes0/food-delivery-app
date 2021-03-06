import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Colours} from '../theme';

const {width: screenWidth} = Dimensions.get('screen');

interface ButtonPropsInterface {
  children: String;
  onPress: Function;
}

const Button = ({children: text, onPress}: ButtonPropsInterface) => {
  return (
    <TouchableOpacity style={style.button} onPress={() => onPress()}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 36.0,
    marginHorizontal: 50.0,
    width: screenWidth - 100.0,
    backgroundColor: Colours.kWhiteColour,
    paddingVertical: 25.0,
    borderRadius: 30.0,
    alignItems: 'center',
  },
  text: {
    color: Colours.kOnboardingBackground,
    fontSize: 17.0,
    lineHeight: 20.0,
    fontFamily: 'SFPro-Bold',
  },
});

export default Button;
