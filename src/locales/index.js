/**
 * i18n
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from '../actions/locales';

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

export const appLocales = [
  'en',
  'zh',
];

import enTranslationMessages from './en.json';
import zhTranslationMessages from './zh.json';

// import enTranslationMessages from './en_US.js';
// import zhTranslationMessages from './zh_CN.js';

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);
  for (const messageKey of messageKeys) {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  zh: formatTranslationMessages('zh', zhTranslationMessages)
};
