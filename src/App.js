import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import productData from './components/product_data.json';
import { ProductCart } from './components';

const App = () => {
  const renderListItem = ({item}) => <ProductCart product={item} />
;  return (
    <SafeAreaView>
      <View>
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
