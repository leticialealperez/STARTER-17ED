import { Fragment } from 'react/jsx-runtime'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './config/global/GlobalStyles'
import { AppRoutes } from './config/routes/AppRoutes'
import { darkTheme } from './config/themes/dark'


export function App() {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          <AppRoutes />
      </ThemeProvider>
    </Fragment>
  )
}

// 


