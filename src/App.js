import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import productData from './components/product_data.json';
import { ProductCart } from './components';

const App = () => {
  const renderListItem = ({item}) => <ProductCart product={item} />

  useEffect(() => {
    Alert.alert('RobinShop', 'Welcome to RobinShop...')
  }, []);

;  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text style={styles.header}>ROBINSHOP</Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={productData}
          renderItem={renderListItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 40,
    textAlign: 'center'
  }
})