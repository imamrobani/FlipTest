import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcCopy} from '../../assets';
import {Gap, Header} from '../../components';
import {Colors, Fonts} from '../../const';
import DetailContent from './Home.fragment/DetailContent';
import DetailHeader from './Home.fragment/DetailHeader';

const DetailTransaction = ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header label="Detail Transaction" onBack={goBack} />
      <Gap height={16} />
      <DetailHeader />
      <Gap height={2} />
      <DetailContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1}
});

export default DetailTransaction;
