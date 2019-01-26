import LogRocket from 'logrocket'

const useLogRocket = () => {
  if (process.env.REACT_APP_LOGROCKET_ID) LogRocket.init(process.env.REACT_APP_LOGROCKET_ID)
}

export default useLogRocket
