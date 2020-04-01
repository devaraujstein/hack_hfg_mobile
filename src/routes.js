import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import News from './pages/News/index';
//import Detail from './pages/Detail/index';
import Dice from './pages/Dice/index';

const Tab = createMaterialTopTabNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
            <Tab.Screen name="News" component={News}  />
            <Tab.Screen name="Dice" component={Dice} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
