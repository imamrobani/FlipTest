import {getTransaction} from '../../api/transaction/TransactionApi';
import {setLoading} from './global';

export const getListTransaction = (): any => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await getTransaction();
    dispatch(setLoading(false));
    dispatch({type: 'GET_TRANSACTION', value: response.data});
  } catch (error) {
    dispatch(setLoading(false));
  }
};
