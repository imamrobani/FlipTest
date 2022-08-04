import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '../../../const';

const Status = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Berhasil</Text>
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
