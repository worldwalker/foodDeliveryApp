import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/NavigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {categories, featuredDishes} from '../../database/data';
import Divider from '../../components/Divider';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={{
              uri: 'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/I6BHOECJXXWOIRGXCUIBGGN57E.jpg',
            }}
            style={{width: '100%', height: 200}}
          />
        </View>

        <Text
          style={{
            margin: 10,
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Welcome to Burak
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredDishes.map((dish, index) => (
            <Image
              key={index}
              source={{uri: dish.image}}
              style={{width: 100, height: 100, marginHorizontal: 10}}
            />
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {categories.map((category, index) => (
            <View key={index} style={{width: '100%', margin: 10}}>
              <Image
                source={{uri: category.image}}
                style={{width: '100%', height: 200}}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                {category.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
