import React from 'react';
import {SafeAreaView,StyleSheet,Text,View,FlatList} from 'react-native';

import ProductCard from "./components/Card/ProductCard";
import listProduct from "./store_data.json";
import SearchBox from "./components/SearchBox/SearchBox";

function App(){
  const renderProduct = ({item}: {item: any}) => <ProductCard product={item}/>;
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATIKASTORE</Text>
        <SearchBox />
        <FlatList 
          showsVerticalScrollIndicator={true}
          numColumns={2}
          data={listProduct}
          renderItem={renderProduct}
          keyExtractor={(item)=> item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginBottom:130,
  },
  title:{
    paddingVertical:10,
    paddingHorizontal:14,
    color:"purple",
    fontSize:30,
    fontWeight:"bold",
  }
});

export default App;
