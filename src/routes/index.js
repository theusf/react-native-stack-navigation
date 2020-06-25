import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//import {AuthContext} from '../services';
import Drawer from './drawer.routes';
import Login from './login.routes';

const Stack = createStackNavigator();

const Routes = () => {
  //const {isLoggedOut} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

          <Stack.Screen name="App" component={Drawer} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;