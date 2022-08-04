import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowRight} from '../../../assets';
import {Colors, Fonts} from '../../../const';

interface TitleBankProps {
  sender: string;
  beneficiary: string;
}

const TitleBank = ({sender, beneficiary}: TitleBankProps) => {
  return (
    <View style={styles.rowItem}>
      <Text style={styles.bankName}>{sender}</Text>
      <IcArrowRight />
      <Text style={styles.bankName}>{beneficiary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bankName: {
    fontFamily: Fonts.INTER_BOLD,
    color: Colors.black,
    fontSize: 16
  }
});

export default TitleBank;
