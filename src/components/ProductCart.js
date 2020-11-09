import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const ProductCart = (props) => {
  const {product} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={{alignSelf: 'center'}}>{product.title}</Text>
      <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>{product.price}</Text>
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
    resizeMode: "contain",
  },
});
