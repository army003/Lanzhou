/* eslint-disable react/jsx-key */
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { kk } from './kz/kz';
import { ru } from './ru/ru';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    resources: {
      ru: {
        translation: ru
      },
      kk: {
        translation: kk
      }
    }
  });
