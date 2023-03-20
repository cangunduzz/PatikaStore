import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 5,
    height: Dimensions.get('window').height / 4,
    margin: 5,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    color: 'black',
    marginTop: 2,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  price: {
    marginLeft: 5,
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
  },
  inStock: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
