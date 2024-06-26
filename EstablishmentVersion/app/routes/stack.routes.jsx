import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

const Stack = createStackNavigator()

export default function StackRoutes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
} 