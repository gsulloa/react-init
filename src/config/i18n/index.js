import { I18nextProvider } from 'react-i18next'
import instance from './instance'
import withProvider from '../withProvider'

const withI18nProvider = withProvider(I18nextProvider, { i18n: instance })

export default withI18nProvider
