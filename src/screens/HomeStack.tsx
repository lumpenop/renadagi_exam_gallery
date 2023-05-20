import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from 'src/screens/PostScreen';
import ProfileScreen from 'src/screens/ProfileScreen';
import FeedScreen from './FeedScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{title: '게시물'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
