import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colours} from '../../theme';
import Logo from '../../../assets/images/logo.png';
import Button from '../../components/Button';

const Onboarding = () => {
  return (
    <View style={style.container}>
      <View style={style.logoBox}>
        <Image source={Logo} style={style.logo} />
      </View>
      <Text style={style.text}>Food for</Text>
      <Text style={style.text}>Everyone</Text>

      <Button onPress={() => {}}>Get started</Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.kOnboardingBackground,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  logoBox: {
    marginTop: 56.0,
    marginLeft: 49.0,
    marginBottom: 42.57,
    height: 73.0,
    width: 73.0,
    borderRadius: 100,
    backgroundColor: Colours.kWhiteColour,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
    width: 45.86,
    height: 49.65,
  },
  text: {
    marginLeft: 51.0,
    fontFamily: 'SFPro-Bold',
    fontSize: 65.0,
    lineHeight: 65.0,
    color: Colours.kWhiteColour,
  },
});

export default {component: Onboarding, name: 'Onboarding'};
