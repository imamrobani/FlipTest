import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../../components';
import {Colors, Fonts} from '../../../const';
import DetailContentItem from './DetailContentItem';
import TitleBank from './TitleBank';

const DetailContent = () => {
  return (
    <View style={styles.container}>
      <TitleBank sender="Permata" beneficiary="BNI" />
      <View style={styles.row}>
        <DetailContentItem name={'SYIFA SALSABYLA'} value={'0313955548'} />
        <DetailContentItem name={'NOMINAL'} value={'Ro.10.048'} />
      </View>
      <View style={styles.row}>
        <DetailContentItem name={'BERITA TRANSFER'} value={'Coba mbanking yey'} />
        <DetailContentItem name={'KODE UNIK'} value={'50'} />
      </View>
      <Gap height={8} />
      <DetailContentItem name={'WAKTU DIBUAT'} value={'8 April 2020'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.white
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 32,
    marginVertical: 8
  },
  name: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black
  },
  value: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.black
  }
});

export default DetailContent;
