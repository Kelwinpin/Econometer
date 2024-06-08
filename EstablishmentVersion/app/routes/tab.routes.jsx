import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from "./stack.routes"
import IconNative from '../components/Icon';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="HomeStack" 
        component={StackRoutes} 
        options={{ title: 'Pedidos', tabBarIcon: () => <IconNative name={"jenkins"} />}} 
      />
    </Tab.Navigator>
  );
}