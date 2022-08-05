import {getTransaction} from '../../api/transaction/TransactionApi';
import {setLoading, setLoadingGlobal} from './global';

export const getListTransaction = (): any => async (dispatch: any) => {
  dispatch(setLoadingGlobal(true));
  try {
    const response = await getTransaction();
    dispatch(setLoadingGlobal(false));
    dispatch({type: 'GET_TRANSACTION', value: response.data});
  } catch (error) {
    dispatch(setLoadingGlobal(false));
  }
};
