import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BorderedInput from 'src/components/BorderedInput';

const SignForm = ({isSignUp, onSubmit, form, createChangeTextHandler}) => {
  const passwordRef = React.useRef();
  const confirmPasswordRef = React.useRef();

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <BorderedInput
        placeholder="비밀번호"
        secureTextEntry
        hasMarginBottom={isSignUp}
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          placeholder="비밀번호 확인"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}
          ref={confirmPasswordRef}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  block: {},
});

export default SignForm;
