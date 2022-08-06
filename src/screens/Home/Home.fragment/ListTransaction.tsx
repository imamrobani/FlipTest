import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemList from './ItemList';
import {useDispatch, useSelector} from 'react-redux';
import {getListTransaction} from '../../../redux/action';
import SearchBar from './SearchBar';

const ListTransaction = () => {
  const [dataTrasactions, setDataTrasactions] = useState([]);
  const dispatch = useDispatch();

  const {transactions} = useSelector((state: any) => state.transactionReducer);

  useEffect(() => {
    dispatch(getListTransaction());
  }, []);

  useEffect(() => {
    if (transactions) {
      setDataTrasactions(transactions);
    }
  }, [transactions]);

  const onChangeText = (text: string) => {
    let newObject: any = {};

    Object.keys(transactions).forEach(item => {
      if (transactions[item]?.beneficiary_name?.toLowerCase().includes(text?.toLowerCase())) {
        newObject[item] = transactions[item];
      }

      if (transactions[item]?.beneficiary_bank?.toLowerCase().includes(text?.toLowerCase())) {
        newObject[item] = transactions[item];
      }

      if (transactions[item]?.sender_bank?.toLowerCase().includes(text?.toLowerCase())) {
        newObject[item] = transactions[item];
      }

      if (transactions[item]?.amount?.toString().includes(text)) {
        newObject[item] = transactions[item];
      }
    });

    setDataTrasactions(newObject);
  };

  const renderItem = ({item}: any) => {
    return <ItemList data={transactions[item]} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={onChangeText} />
      <FlatList
        data={Object.keys(dataTrasactions)}
        contentContainerStyle={styles.content}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    flexGrow: 1,
    paddingBottom: 8
  }
});

export default ListTransaction;
