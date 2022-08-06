import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatableScrollView: Animatable.AnimatableComponent<any, any> =
  Animatable.createAnimatableComponent(ScrollView);

const animation = {
  0: {opacity: 0, translateX: 50},
  1: {opacity: 1, translateX: 0}
};

const colors = [
  '#333853',
  '#A78212',
  'tomato',
  '#1A5B49',
  'gold',
  '#090F0B',
  '#Ac2B01',
  '#6A472E',
  '#0099CC'
];

const ColorSection = () => {
  return (
    <AnimatableScrollView
      useNativeDriver
      animation={animation}
      delay={300}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{flexGrow: 0}}
      contentContainerStyle={styles.container}>
      {colors.map(color => {
        return <View key={color} style={[styles.color, {backgroundColor: color}]} />;
      })}
    </AnimatableScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 14},
  color: {
    width: 56,
    height: 56,
    borderRadius: 16,
    marginRight: 14
  }
});

export default ColorSection;
