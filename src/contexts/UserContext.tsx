import React, {createContext, useContext} from 'react';
import {Text} from 'react-native';

const UserContext = createContext(null);

interface Props {
  children: JSX.Element;
}

export const UserContextProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{user, setUser}} children={children}>
      <Text>UserContext hi</Text>
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('UserContext.Provider is not found');
  }
  return userContext;
};
