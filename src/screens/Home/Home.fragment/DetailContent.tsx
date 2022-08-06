import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap} from '../../../components';
import {Colors, Fonts} from '../../../const';
import DetailContentItem from './DetailContentItem';
import TitleBank from './TitleBank';
import {useRoute} from '@react-navigation/native';
import {ItemListProps} from '../Home.interface';
import {formatDate, formatRp} from '../../../utils/Helper/Helper';

const DetailContent = () => {
  const route = useRoute<any>();
  const data: ItemListProps = route?.params?.data;

  return (
    <View style={styles.container}>
      <TitleBank
        sender={data?.sender_bank?.toUpperCase()}
        beneficiary={data?.beneficiary_bank?.toUpperCase()}
      />
      <View style={styles.row}>
        <DetailContentItem
          name={data?.beneficiary_name?.toUpperCase()}
          value={data?.account_number}
        />
        <DetailContentItem name={'NOMINAL'} value={formatRp(data?.amount)} />
      </View>
      <View style={styles.row}>
        <DetailContentItem name={'BERITA TRANSFER'} value={data?.remark} />
        <DetailContentItem name={'KODE UNIK'} value={data?.unique_code} />
      </View>
      <Gap height={8} />
      <View style={styles.row}>
        <DetailContentItem name={'WAKTU DIBUAT'} value={formatDate(data?.created_at)} />
      </View>
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
