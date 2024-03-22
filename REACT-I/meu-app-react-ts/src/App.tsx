import { Fragment } from 'react/jsx-runtime'
import { GlobalStyles } from './config/global/GlobalStyles'
import { AppRoutes } from './config/routes/AppRoutes'


export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <AppRoutes />
    </Fragment>
  )
}


