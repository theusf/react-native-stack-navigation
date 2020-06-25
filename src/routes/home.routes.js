
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/Home';

const HomeStack = createStackNavigator();

const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

export default Home;