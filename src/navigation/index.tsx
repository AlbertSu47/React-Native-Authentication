import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import VerifyCodeScreen from '../screens/VerifyCodeScreen'
import QuizScreen from '../screens/QuizScreen'
import Home from '../screens/HomeScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Quiz' component={QuizScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
        <Stack.Screen name='PersonalInfo' component={PersonalInfoScreen} />
        <Stack.Screen name='VerifyCode' component={VerifyCodeScreen} />
        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;