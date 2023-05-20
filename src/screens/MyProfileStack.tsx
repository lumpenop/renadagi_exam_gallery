import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from 'src/screens/PostScreen';
import MyProfileScreen from './MyProfileScreen';

const Stack = createNativeStackNavigator();

function MyProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{title: '게시물'}}
      />
    </Stack.Navigator>
  );
}

export default MyProfileStack;
