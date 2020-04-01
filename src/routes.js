import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Constants from 'expo-constants';

import News from './pages/News/index';
//import Detail from './pages/Detail/index';
import Dice from './pages/Dice/index';

const Tab = createMaterialTopTabNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Tab.Navigator style={{paddingTop: Constants.statusBarHeight}}>
            <Tab.Screen name="Noticias" component={News}  />
            <Tab.Screen name="Dados" component={Dice} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
