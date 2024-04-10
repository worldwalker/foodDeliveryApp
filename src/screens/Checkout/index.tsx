import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

type CheckoutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Checkout'
>;

const CheckoutScreen = () => {
  const navigation = useNavigation<CheckoutScreenNavigationProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Checkout Screen</Text>
      <Button title="Go Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

export default CheckoutScreen;
