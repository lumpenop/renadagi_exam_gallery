import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {useUserContext} from 'src/contexts/UserContext';
import {subscribeAuth} from 'src/lib/auth';
import {getUser} from 'src/lib/users';
import MainTab from 'src/screens/MainTab';
import ModifyScreen from 'src/screens/ModifyScreen';
import SignInScreen from 'src/screens/SignInScreen';
import UploadScreen from 'src/screens/UploadScreen';
import WelcomeScreen from 'src/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  const {user, setUser} = useUserContext();

  React.useEffect(() => {
    // 컴포넌트 첫 로딩 시 로그인 상태를 확인하고 UserContext에 적용
    const unsubscribe = subscribeAuth(async currentUser => {
      // 여기에 등록한 함수는 사용자 정보가 바뀔 때마다 호출되는데
      // 처음 호출될 때 바로 unsubscribe해 한 번 호출된 후에는 더 이상 호출되지 않게 설정

      unsubscribe();
      if (!currentUser) {
        return;
      }
      const profile = await getUser(currentUser.uid);
      if (!profile) {
        return;
      }
      setUser(profile);
    });
  }, [setUser]);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
          />
          <Stack.Screen
            name="Modify"
            component={ModifyScreen}
            options={{title: '설명 수정', headerBackTitle: '뒤로가기'}}
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
