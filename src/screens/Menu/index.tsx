import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MenuTypeContext} from '../../context/AppContextProvider';
import {products} from '../../database/data';
import {RootStackParamList} from '../../types/NavigationTypes';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const Menu = () => {
  const menuTypeContext = useContext(MenuTypeContext);
  if (!menuTypeContext) {
    return <Text>Error: menuTypeContext not found</Text>;
  }
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {menuType, setMenuType, setChosenProductId, chosenProductId} =
    menuTypeContext;

  /** HANDLERS **/
  const categories = products.reduce((acc: any, product) => {
    const key = product.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {});

  const handleNavigation = (chosenProductId: number) => {
    setChosenProductId(chosenProductId);
    navigation.navigate('ChosenProduct');
  };

  const renderProduct = ({item}: any) => (
    <TouchableOpacity onPress={() => handleNavigation(item.id)}>
      <View style={styles.product}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({item}: any) => (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{item.category.toUpperCase()}</Text>
      <FlatList
        data={item.products}
        renderItem={renderProduct}
        keyExtractor={product => product.id.toString()}
      />
    </View>
  );

  const categoryData = Object.keys(categories).map(key => ({
    category: key,
    products: categories[key],
  }));

  return (
    <FlatList
      data={categoryData}
      renderItem={renderCategory}
      keyExtractor={item => item.category}
    />
  );
};

const styles = StyleSheet.create({
  category: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  product: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
  },
});

export default Menu;
