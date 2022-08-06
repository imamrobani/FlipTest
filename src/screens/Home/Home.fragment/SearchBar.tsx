import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {IcChevronDown, IcSearch} from '@assets';
import {Colors, Fonts} from '@const';
import SortModal from './SortModal';

interface SearchBarProps {
  onChangeText: (text: string) => void;
  onSort: (item: any) => void;
}

const SearchBar = ({onChangeText, onSort}: SearchBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <IcSearch />
        <TextInput
          style={styles.inputContainer}
          placeholder="Cari nama, bank, atau nominal"
          onChangeText={onChangeText}
        />
        <Pressable style={styles.row} onPress={() => setIsVisible(true)}>
          <Text style={styles.sort}>URUTKAN</Text>
          <IcChevronDown />
        </Pressable>
      </View>
      <SortModal isVisible={isVisible} setIsVisible={setIsVisible} onSort={onSort} />
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
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 8
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
