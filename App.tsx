import React, {useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import MenuScreen from './src/screens/Menu';
import CheckoutScreen from './src/screens/Checkout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TMenuTypes} from './src/types/NavigationTypes';
import {MenuTypeContext} from './src/context/AppContextProvider';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [menuType, setMenuType] = useState<TMenuTypes>('all');
  return (
    <MenuTypeContext.Provider value={{menuType, setMenuType}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </MenuTypeContext.Provider>
  );
}

export default App;
