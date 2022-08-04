import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {IcChevronDown, IcSearch} from '../../../assets';
import {Colors, Fonts} from '../../../const';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <IcSearch />
      <TextInput style={styles.inputContainer} placeholder="Cari nama, bank, atau nominal" />
      <Pressable style={styles.row}>
        <Text style={styles.sort}>URUTKAN</Text>
        <IcChevronDown />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 4
  },
  inputContainer: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sort: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.orange,
    fontSize: 12
  }
});

export default SearchBar;
