import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator style="navigator">
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="About us" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


