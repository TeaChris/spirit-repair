import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import { OpenRoutes } from './routes/publicRoutes';
import { openRoutesData } from './routes/routesData';
import aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  aos.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 3000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  const appRoute = openRoutesData.map((route) => (
    <OpenRoutes
      exact={route.exact}
      path={route.path}
      component={route.component}
      key={route.name}
      name={route.name}
    />
  ));
  return (
    <div className="App">
      <Suspense fallback={<div>is loading</div>}>
        <Router>
          <Navbar />
          <Switch>{appRoute}</Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
