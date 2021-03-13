import 'react-native-gesture-handler';
import React from 'react';
import Onboarding from './screens/unauthed/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/unauthed/Login';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Onboarding.name}
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name={Onboarding.name} component={Onboarding.component} />
        <Screen name={Login.name} component={Login.component} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
