import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../../const';

interface DetailContentItemProps {
  name: string;
  value: string;
}

const DetailContentItem = ({name, value}: DetailContentItemProps) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black
  },
  value: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black
  }
});

export default DetailContentItem;
