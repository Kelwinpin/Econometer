import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "../screens/Details";
import Discount from "../screens/Discount";

const Stack = createStackNavigator()

export default function StackRoutes(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Discount} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
} 