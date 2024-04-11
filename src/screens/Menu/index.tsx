import React, {useContext} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {MenuTypeContext} from '../../context/AppContextProvider';

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const MenuScreen = (props: any) => {
  const navigation = useNavigation<MenuScreenNavigationProp>();
  const menuTypeContext = useContext(MenuTypeContext);

  if (!menuTypeContext) {
    return <Text>Error: menuTypeContext not found</Text>;
  }
  const {menuType, setMenuType} = menuTypeContext;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {menuType === 'all' && (
        <View>
          <Text>Full Menu</Text>
        </View>
      )}
      {menuType === 'appetizer' && (
        <View>
          <Text>Appetizer Menu</Text>
        </View>
      )}
      {menuType === 'desert' && (
        <View>
          <Text>Desert Menu</Text>
        </View>
      )}
      {menuType === 'drink' && (
        <View>
          <Text>Drink Menu</Text>
        </View>
      )}
      {menuType === 'main' && (
        <View>
          <Text>Main Dishes Menu</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;
