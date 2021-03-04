/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Onboarding from './screens/unauthed/onboarding';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <>
      <Onboarding.component />
    </>
  );
};

export default App;
