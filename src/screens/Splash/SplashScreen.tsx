import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {Colors, Fonts} from '../../const';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View
        style={styles.container}
        useNativeDriver
        animation={'bounceIn'}
        delay={500}
        duration={1500}>
        <Logo fill="red" color="white" />
        <Gap height={16} />
        <Text style={styles.title}>FlipTest!</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black,
    fontSize: 24
  }
});

export default SplashScreen;
