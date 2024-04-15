import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MenuTypeContext} from '../../context/AppContextProvider';

const ChosenProductPage = () => {
  const product = {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Deliciously cooked salmon with a touch of grill flavor.',
    price: '14.99',
    imageUrl:
      'https://prettysweetblog.com/wp-content/uploads/2021/01/No-bake-chocolate-hazelnut-dessert-in-a-glass-1-2.jpg',
  };
  const [cart, setCart] = useState<any>([]);
  const menuTypeContext = useContext(MenuTypeContext);
  if (!menuTypeContext) {
    return <Text>Error: menuTypeContext not found</Text>;
  }
  const {menuType, setMenuType, setChosenProductId, chosenProductId} =
    menuTypeContext;

  /** LIFECYCLES **/
  useEffect(() => {
    const fetchCart = async () => {
      const loadedCart = await loadCartFromStorage();
      setCart(loadedCart);
    };

    fetchCart();
  }, []);

  /** HANDLERS **/
  const saveCartToStorage = async (cartItems: any) => {
    try {
      const jsonValue = JSON.stringify(cartItems);
      await AsyncStorage.setItem('cart', jsonValue);
      console.log('Cart saved successfully.');
    } catch (e) {
      console.error('Failed to save the cart', e);
    }
  };

  const loadCartFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cart');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Failed to load the cart', e);
    }
  };

  const handleAddToCart = async (product: any) => {
    try {
      const newCart = [...cart, product];
      setCart(newCart);
      await saveCartToStorage(newCart);
      window.alert('Added!');
    } catch (error) {
      console.log(error);
    }
  };

  console.log('chosenProductId => ', chosenProductId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Image source={{uri: product.imageUrl}} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => handleAddToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default ChosenProductPage;
