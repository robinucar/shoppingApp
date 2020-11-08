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

const App = () => {
  console.log(productData);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={productData}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
