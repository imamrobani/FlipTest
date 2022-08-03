import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts} from './const';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 16
  }
});

export default App;
