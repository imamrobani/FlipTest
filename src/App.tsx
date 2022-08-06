import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {enableScreens} from 'react-native-screens';
import {Colors} from './const';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';
enableScreens();

const MainApp = () => {
  const {isLoadingGlobal} = useSelector((state: any) => state.globalReducer);

  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: Colors.green}} />
      <Router />
      {isLoadingGlobal && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
