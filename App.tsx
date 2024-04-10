import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const ProfileScreen = ({navigation, route}: {navigation: any; route: any}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator></Stack.Navigator> */}
      <Text>Hello World</Text>
    </NavigationContainer>
  );
}

export default App;
