import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const searchboxcontainer = StyleSheet.create({
  searchbar: {
    width: width - 20,
    height: 48,
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: '#ddd',
  },
  placeholder: {
    color: '#999',
  },
});

export default searchboxcontainer;
