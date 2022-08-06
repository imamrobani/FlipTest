import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '@const';
import {IcArrowRight} from '@assets';
import Status from './Status';
import {useNavigation} from '@react-navigation/native';
import {ItemListProps} from '../Home.interface';
import {formatDate, formatRp} from '@utils';

const ItemList = ({data}: {data: ItemListProps}) => {
  const navigation = useNavigation<any>();

  const onDetail = () => {
    navigation.navigate('DetailTransaction', {data});
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDetail}>
      <View style={data?.status === 'SUCCESS' ? styles.container : styles.pendingContainer}>
        <View style={styles.rowContent}>
          <View style={styles.flex1}>
            <View style={styles.rowItem}>
              <Text style={styles.bankName}>{data?.sender_bank?.toUpperCase()}</Text>
              <IcArrowRight />
              <Text style={styles.bankName}>{data?.beneficiary_bank?.toUpperCase()}</Text>
            </View>
            <Text style={styles.name}>{data?.beneficiary_name?.toUpperCase()}</Text>
            <View style={styles.rowItem}>
              <Text style={styles.name}>{formatRp(data?.amount)}</Text>
              <View style={styles.dot} />
              <Text style={[styles.name, styles.flex1]}>{formatDate(data?.created_at)}</Text>
            </View>
          </View>
          <Status data={data} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderLeftWidth: 8,
    borderLeftColor: Colors.green
  },
  pendingContainer: {
    marginVertical: 4,
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderLeftWidth: 8,
    borderLeftColor: Colors.orange
  },
  flex1: {flex: 1},
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  bankName: {
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.black,
    fontSize: 16
  },
  name: {
    fontFamily: Fonts.INTER_MEDIUM,
    color: Colors.black
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
    backgroundColor: Colors.black,
    marginHorizontal: 4,
    marginTop: 2
  }
});

export default ItemList;
