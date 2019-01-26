import { ThemeProvider } from 'emotion-theming'
import withProvider from '../withProvider'

const theme = {}

const withEmotionProvider = withProvider(ThemeProvider, { theme })

export default withEmotionProvider
