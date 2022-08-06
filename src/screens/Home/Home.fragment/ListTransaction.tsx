import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ItemList from './ItemList';
import {useDispatch, useSelector} from 'react-redux';
import {getListTransaction} from '../../../redux/action';
import SearchBar from './SearchBar';

const ListTransaction = () => {
  const [dataTrasactions, setDataTrasactions] = useState([]);
  const dispatch = useDispatch();

  const {transactions} = useSelector((state: any) => state.transactionReducer);
  const {isLoadingGlobal} = useSelector((state: any) => state.globalReducer);

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
      if (transactions[item]?.beneficiary_name?.toLowerCase().includes(text?.toLowerCase()))
        newObject[item] = transactions[item];

      if (transactions[item]?.beneficiary_bank?.toLowerCase().includes(text?.toLowerCase()))
        newObject[item] = transactions[item];

      if (transactions[item]?.sender_bank?.toLowerCase().includes(text?.toLowerCase()))
        newObject[item] = transactions[item];

      if (transactions[item]?.amount?.toString().includes(text))
        newObject[item] = transactions[item];
    });

    setDataTrasactions(newObject);
  };

  const onSort = (item: any) => {
    if (item?.id === 1) nameAsc();
    if (item?.id === 2) nameDsc();
    if (item?.id === 3) dateDsc();
    if (item?.id === 4) dateAsc();
    if (item?.id === 0) setDataTrasactions(transactions);
  };

  const nameAsc = () => {
    const sorted = Object.keys(transactions)
      .sort((a, b) =>
        transactions[a].beneficiary_name < transactions[b].beneficiary_name ? -1 : 1
      )
      .reduce((accumulator: any, key) => {
        accumulator[key] = transactions[key];
        return accumulator;
      }, {});

    setDataTrasactions(sorted);
  };

  const nameDsc = () => {
    const sorted = Object.keys(transactions)
      .sort((a, b) =>
        transactions[a].beneficiary_name > transactions[b].beneficiary_name ? -1 : 1
      )
      .reduce((accumulator: any, key) => {
        accumulator[key] = transactions[key];
        return accumulator;
      }, {});

    setDataTrasactions(sorted);
  };

  const dateAsc = () => {
    const sorted = Object.keys(transactions)
      .sort((a, b) => (transactions[a].created_at < transactions[b].created_at ? -1 : 1))
      .reduce((accumulator: any, key) => {
        accumulator[key] = transactions[key];
        return accumulator;
      }, {});

    setDataTrasactions(sorted);
  };

  const dateDsc = () => {
    const sorted = Object.keys(transactions)
      .sort((a, b) => (transactions[a].created_at > transactions[b].created_at ? -1 : 1))
      .reduce((accumulator: any, key) => {
        accumulator[key] = transactions[key];
        return accumulator;
      }, {});

    setDataTrasactions(sorted);
  };

  const renderItem = ({item}: any) => {
    return <ItemList data={transactions[item]} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar onSort={onSort} onChangeText={onChangeText} />
      <FlatList
        data={Object.keys(dataTrasactions)}
        contentContainerStyle={styles.content}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onRefresh={() => dispatch(getListTransaction())}
        refreshing={isLoadingGlobal}
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
