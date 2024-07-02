import { Fragment } from 'react/jsx-runtime';
import { GlobalStyles } from './configs/global/GlobalStyles';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <AppRoutes />
    </Fragment>
  )
}

