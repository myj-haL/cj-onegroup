import { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollToTop from './common/components/ScrollToTop';
import './lang/i18n';

const Main = lazy(() => import("./pages/Main"));
const About = lazy(() => import("./pages/About"));
const Branch = lazy(() => import("./pages/Branch"));
const People = lazy(() => import("./pages/People"));

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter basename="/cj-one-group">
        <ScrollToTop>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/branch" element={<Branch />} />
              <Route path="/people" element={<People />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
