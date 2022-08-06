import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcChevron} from '../../../assets';
import {Colors, Fonts} from '../../../const';

interface ItemListMenuProps {
  text: string;
  onPress?: () => void;
}

const ItemListMenu = ({text, onPress}: ItemListMenuProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcChevron />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7
  },
  text: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black
  }
});
