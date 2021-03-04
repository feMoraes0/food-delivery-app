import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Onboarding = () => {
  return (
    <View style={style.container}>
      <Text>Onboarding Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default {component: Onboarding, name: 'Onboarding'};
