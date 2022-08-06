import React from 'react';
import {Alert, Platform, Pressable, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {IcCopy} from '@assets';
import {Gap} from '@components';
import {Colors, Fonts} from '@const';
import {useRoute} from '@react-navigation/native';
import {ItemListProps} from '../Home.interface';
import Clipboard from '@react-native-clipboard/clipboard';

const DetailHeader = () => {
  const route = useRoute<any>();
  const data: ItemListProps = route?.params?.data;

  const onCopy = () => {
    Clipboard.setString(data?.id);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Berhasil disalin', ToastAndroid.SHORT);
    } else if (Platform.OS === 'ios') {
      Alert.alert('Berhasil disalin');
    }
  };

  return (
    <>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>ID TRANSAKSI: </Text>
          <Text style={styles.title}>{`#${data?.id}`}</Text>
          <Gap width={4} />
          <Pressable onPress={onCopy}>
            <IcCopy />
          </Pressable>
        </View>
      </View>
      <Gap height={0.5} />
      <View style={styles.content}>
        <View style={styles.rowBetween}>
          <Text style={styles.title}>DETAIL TRANSAKSI</Text>
          <Text style={styles.close}>Tutup</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    backgroundColor: Colors.white
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  close: {
    fontFamily: Fonts.INTER_REGULAR,
    color: Colors.orange
  }
});

export default DetailHeader;
