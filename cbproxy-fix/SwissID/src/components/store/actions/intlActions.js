export const internationalization = (locale) => {
  return dispatch => {
    dispatch({ type: 'SET_LOCALE', payload: locale })
  };
};