import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/screens/Home";
import Mycart from "./components/screens/Mycart";
import Productinfo from "./components/screens/Productinfo";



export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Mycart} />
      <Stack.Screen name="ProductInfo" component={Productinfo} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

