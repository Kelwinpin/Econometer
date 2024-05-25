import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from "./stack.routes"
import Econometro from '../screens/Econometro';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStack" 
        component={StackRoutes} 
        options={{ headerShown: false, title: 'Home' }} 
      />
      <Tab.Screen 
        name="Econometro" 
        component={Econometro} 
      />
    </Tab.Navigator>
  );
}