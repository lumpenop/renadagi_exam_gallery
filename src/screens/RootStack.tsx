import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import SignInScreen from 'src/screens/SignInScreen';
import WelcomeScreen from 'src/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default RootStack;
