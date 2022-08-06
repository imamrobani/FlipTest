import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from '@const';
import {ItemListProps} from '../Home.interface';

const Status = ({data}: {data: ItemListProps}) => {
  const statusTransaction = () => {
    if (data?.status === 'SUCCESS') {
      return 'Berhasil';
    } else if (data?.status === 'PENDING') {
      return 'Pengecekan';
    }
  };

  return (
    <View style={data?.status === 'SUCCESS' ? styles.container : styles.pendingContainer}>
      <Text style={data?.status === 'SUCCESS' ? styles.title : styles.titlePending}>
        {statusTransaction()}
      </Text>
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
  pendingContainer: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.orange
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.white,
    fontSize: 12
  },
  titlePending: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 12
  }
});

export default Status;
