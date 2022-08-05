import {combineReducers} from 'redux';
import {globalReducer} from './global';
import {transactionReducer} from './transaction';

const reducer = combineReducers({
  globalReducer,
  transactionReducer
});

export default reducer;
