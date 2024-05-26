import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from "./stack.routes"
import Econometro from '../screens/Econometro';
import IconNative from '../components/Icon';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStack" 
        component={StackRoutes} 
        options={{ title: 'Empresas Parceiras', tabBarIcon: () => <IconNative name={"tags"} />}} 
      />
      <Tab.Screen 
        name="Econometro" 
        component={Econometro} 
        options={{ title: 'Econometro', tabBarIcon: () => <IconNative name={"piggy-bank"} /> }} 
      />
    </Tab.Navigator>
  );
}