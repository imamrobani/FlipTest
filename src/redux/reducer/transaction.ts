const initStateTransaction = {
  transactions: []
};

export const transactionReducer = (state = initStateTransaction, action: any) => {
  switch (action.type) {
    case 'GET_TRANSACTION': {
      return {...state, transactions: action.value};
    }
  }
  return state;
};
