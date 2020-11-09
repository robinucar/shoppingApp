import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
} from 'react-native';
import productData from './components/product_data.json';
import {ProductCart} from './components';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  const renderListItem = ({item}) => <ProductCart product={item} />;

  useEffect(() => {
    Alert.alert('RobinShop', 'Welcome to RobinShop...');
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) > -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={styles.header}>ROBINSHOP</Text>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search Item..."
            onChangeText={(value) => setSearchValue(value)}
          />
        </View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={productData}
          data={displayList}
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
    textAlign: 'center',
  },
  searchBar: {
    backgroundColor: '#eceff1',
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
});
