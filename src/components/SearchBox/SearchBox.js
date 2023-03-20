import React from 'react';
import {View, TextInput} from 'react-native';
import searchboxcontainer from './SearchBox.style';

const SearchBox = () => {
  return (
    <TextInput
      style={searchboxcontainer.searchbar}
      placeholderTextColor={searchboxcontainer.placeholder.color}
      placeholderStyle={searchboxcontainer.placeholder}
      placeholder="Ara..."
    />
  );
};

export default SearchBox;
