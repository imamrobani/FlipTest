import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../../../const';
import {IcArrowRight} from '../../../assets';
import Status from './Status';
import {useNavigation} from '@react-navigation/native';
import {ItemListProps} from '../Home.interface';
import {formatRp} from '../../../utils/Helper/Helper';

const ItemList = ({data}: {data: ItemListProps}) => {
  const navigation = useNavigation<any>();

  const onDetail = () => {
    navigation.navigate('DetailTransaction', {data});
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDetail}>
      <View style={styles.container}>
        <View style={styles.rowContent}>
          <View>
            <View style={styles.rowItem}>
              <Text style={styles.bankName}>{data?.sender_bank.toUpperCase()}</Text>
              <IcArrowRight />
              <Text style={styles.bankName}>{data?.beneficiary_bank.toUpperCase()}</Text>
            </View>
            <Text style={styles.name}>{data?.beneficiary_name.toUpperCase()}</Text>
            <View style={styles.rowItem}>
              <Text style={styles.name}>{formatRp(data?.amount)}</Text>
              <View style={styles.dot} />
              <Text style={styles.name}>{data?.created_at}</Text>
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
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center'
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
