import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const MenuScreen = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Menu Screen</Text>
      <Button
        title="Go To Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  );
};

export default MenuScreen;
