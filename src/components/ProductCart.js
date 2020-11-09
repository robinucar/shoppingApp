import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ProductCart = (props) => {
  const {product} = props;

  const stock = product.inStock === true ? null : <Text>This item is Not in the Stock!</Text>;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={{alignSelf: 'center'}}>{product.title}</Text>
      <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
        {product.price}
      </Text>
      <Text style={{color: 'red', fontSize: 15, fontWeight: 'bold', alignSelf: 'center'}}>{stock}</Text>
    </View>
  );
};

export {ProductCart};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    resizeMode: 'contain',
  },
});
