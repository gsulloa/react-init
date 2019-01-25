import * as Sentry from '@sentry/browser'
import LogRocket from 'logrocket'

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
  })
}

if (process.env.REACT_APP_LOGROCKET_ID) {
  /* TODO: fix integration */
  Sentry.configureScope(scope => {
    scope.addEventProcessor(async event => {
      event.extra.sessionURL = LogRocket.sessionURL // eslint-disable-line no-param-reassign
      return event
    })
  })
}
