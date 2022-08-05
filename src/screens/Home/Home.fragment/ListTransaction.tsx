import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ItemList from './ItemList';
import {useDispatch, useSelector} from 'react-redux';
import {getListTransaction} from '../../../redux/action';

const ListTransaction = () => {
  const dispatch = useDispatch();

  const {transactions} = useSelector((state: any) => state.transactionReducer);

  useEffect(() => {
    dispatch(getListTransaction());
  }, []);

  const renderItem = ({item}: any) => {
    // console.tron.log(transactions[item]);
    return <ItemList data={transactions[item]} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(transactions)}
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
