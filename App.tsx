import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import CheckoutScreen from './src/screens/Checkout';
import {TMenuTypes} from './src/types/NavigationTypes';
import {MenuTypeContext} from './src/context/AppContextProvider';
import Menu from './src/screens/Menu';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChosenProductPage from './src/screens/ChosenProduct';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [menuType, setMenuType] = useState<TMenuTypes>('all');
  const [chosenProductId, setChosenProductId] = useState<number>(0);

  return (
    <MenuTypeContext.Provider
      value={{menuType, setMenuType, chosenProductId, setChosenProductId}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="ChosenProduct" component={ChosenProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuTypeContext.Provider>
  );
}

export default App;
