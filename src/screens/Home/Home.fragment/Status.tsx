import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../../const';
import {ItemListProps} from '../Home.interface';

const Status = ({data}: {data: ItemListProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: Colors.green
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.white,
    fontSize: 12
  }
});

export default Status;
