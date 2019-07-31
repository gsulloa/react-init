import i18n from 'i18next'
import * as es from './translates/es'
import * as en from './translates/en'

i18n.init({
  fallbackLng: 'es',
  lng: localStorage.language,
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en,
    es,
  },
  returnObjects: true,
  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
    useSuspense: false,
  },
})

export default i18n
