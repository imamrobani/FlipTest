export const setLoading = (value: boolean) => {
  return {type: 'SET_LOADING', value};
};

export const setLoadingGlobal = (value: boolean) => {
  return {type: 'SET_LOADING_GLOBAL', value};
};
