import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcArrowLeft} from '../../../assets';
import {Colors, Fonts} from '../../../const';
import {Scale} from '../../../utils';
import {Gap} from '../../atoms';

interface HeaderProps {
  onBack: () => void;
  label: string;
}

const Header = ({onBack, label}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <IcArrowLeft />
      </TouchableOpacity>
      <Gap width={24} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    height: Scale(56),
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  label: {
    flex: 1,
    fontFamily: Fonts.INTER_SEMIBOLD,
    fontSize: 20,
    color: Colors.black
  }
});
