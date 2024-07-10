import { GlobalStyles } from './configs/global/GlobalStyles';
import { LightTheme } from './configs/theme/LightTheme';
import { AppRoutes } from './routes/AppRoutes';


export function App() {
  return (
    <LightTheme>
      <GlobalStyles />
      <AppRoutes />
    </LightTheme>
  )
}
