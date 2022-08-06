import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ItemListMenu from './ItemListMenu';

const animation = {
  0: {opacity: 0, translateX: 50},
  1: {opacity: 1, translateX: 0}
};

const buttons = ['Get more custom', 'More items', 'Settings'];

const MenuSection = () => {
  return (
    <View style={styles.container}>
      {buttons.map((text, index) => {
        return (
          <Animatable.View
            key={index}
            useNativeDriver
            animation={animation}
            delay={300 + (index + 1) * 100}>
            <ItemListMenu key={index} text={text} />
          </Animatable.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 14}
});

export default MenuSection;
