import React from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Mario2} from '../../assets';
import ColorSection from './Profile.fragment/ColorSection';
import MenuSection from './Profile.fragment/MenuSection';

const {width} = Dimensions.get('window');

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Animatable.Image source={Mario2} style={styles.image} animation={'fadeInDown'} />
      <ColorSection />
      <MenuSection />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: width,
    height: width,
    resizeMode: 'contain'
  }
});
