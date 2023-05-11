import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {useUserContext} from 'src/contexts/UserContext';
import MainTab from 'src/screens/MainTab';
import SignInScreen from 'src/screens/SignInScreen';
import WelcomeScreen from 'src/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {user} = useUserContext();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
