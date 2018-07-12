export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const CHANGE_LOCALE_SUCCESS = 'CHANGE_LOCALE_SUCCESS';
export const DEFAULT_LOCALE = 'en';

export function changeLanguage(localeCode) {

  return (dispatch, getState) => {

    return dispatch({
      type: CHANGE_LOCALE,
      locale: localeCode
    });
  }
}
