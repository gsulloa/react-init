import LogRocket from 'logrocket'

if (process.env.REACT_APP_LOGROCKET_ID) LogRocket.init(process.env.REACT_APP_LOGROCKET_ID)
