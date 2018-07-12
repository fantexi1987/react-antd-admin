import { CHANGE_LOCALE, CHANGE_LOCALE_SUCCESS, DEFAULT_LOCALE } from '@/actions/locales'

const initialState = {
  locale: DEFAULT_LOCALE,
};

export default function language(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return Object.assign({}, initialState, {locale: action.locale});
    default:
      return state;
  }
}
