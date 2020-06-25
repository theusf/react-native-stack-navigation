import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/Login';

const Stack = createStackNavigator();

const Login = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default Login;