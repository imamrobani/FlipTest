import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {IcRadioChecked, IcRadioUnChecked} from '../../../assets';
import {Gap} from '../../../components';
import {Colors, Fonts} from '../../../const';
import {SORT} from '../Home.mock';

interface SortModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const SortModal = ({isVisible, setIsVisible}: SortModalProps) => {
  const [selected, setSelected] = useState({id: 0, label: ''});

  const onSelect = (item: any) => {
    setSelected(item);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity key={item?.id} activeOpacity={0.7} onPress={() => onSelect(item)}>
        <View style={styles.row}>
          {selected.id === item.id ? <IcRadioChecked /> : <IcRadioUnChecked />}
          <Gap width={8} />
          <Text style={styles.title}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.view}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        useNativeDriver
        animationInTiming={500}
        animationOutTiming={500}>
        <View style={styles.content}>
          <FlatList data={SORT} renderItem={renderItem} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  content: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16
  },
  title: {
    fontFamily: Fonts.INTER_SEMIBOLD,
    color: Colors.black
    // fontSize
  }
});

export default SortModal;
