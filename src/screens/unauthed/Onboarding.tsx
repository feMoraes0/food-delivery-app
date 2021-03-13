import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colours} from '../../theme';
import Logo from '../../../assets/images/logo.png';
import ToyFacesGirl from '../../../assets/images/onboarding/toy-faces-girl.png';
import ToyFacesBoy from '../../../assets/images/onboarding/toy-faces-boy.png';
import Button from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';

const Onboarding = () => {
  return (
    <View style={style.container}>
      <View style={style.logoBox}>
        <Image source={Logo} style={style.logo} />
      </View>
      <Text style={style.text}>Food for</Text>
      <Text style={style.text}>Everyone</Text>
      <View style={style.detailGirl}>
        <Image source={ToyFacesGirl} style={style.detailGirlImage} />
      </View>
      <View style={style.detailBoy}>
        <Image source={ToyFacesBoy} style={style.detailBoyImage} />
      </View>
      <LinearGradient
        style={style.gradientBox}
        locations={[0, 0.43]}
        colors={['rgba(255, 71, 11, 0.01)', 'rgba(255, 71, 11, 1)']}
      />
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
  detailGirl: {
    position: 'absolute',
    bottom: 96.0,
    left: -82.0,
    width: 358.1,
    height: 434.36,
    zIndex: -1,
    transform: [{rotate: '-3.1deg'}],
  },
  detailGirlImage: {},

  detailBoy: {
    position: 'absolute',
    bottom: 125.75,
    right: -75.0,
    width: 225.4,
    height: 298.54,
    zIndex: -1,
    transform: [{rotate: '8.57deg'}],
  },
  detailBoyImage: {},
  gradientBox: {
    width: '100%',
    height: 242.0,
    position: 'absolute',
    bottom: 0,
  },
});

export default {component: Onboarding, name: 'Onboarding'};
