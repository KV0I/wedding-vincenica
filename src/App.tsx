import "./App.css"

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { ThemeSettings } from './components/settings';
import { MotionLazyContainer } from './components/animate';
import DialogProvider from './components/dialog';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <DialogProvider>
            <Router />
          </DialogProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
