import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Fonts} from '@const';
import ListTransaction from './Home.fragment/ListTransaction';

const Home = () => {
  return (
    <View style={styles.container}>
      <ListTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 16
  }
});

export default Home;
