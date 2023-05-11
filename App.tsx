import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {UserContextProvider} from 'src/contexts/UserContext';
import RootStack from 'src/screens/RootStack';

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;
