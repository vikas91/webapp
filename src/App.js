import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './fonts/font-awesome/css/font-awesome.css';
import Home from './pages/home/main';
import routes from './data/routes';
import './App.css';


const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Home/>}>
      <Switch>
        <Route exact path="/" component={<Home/>}/>
        {routes.map(route => (
          <Route path={route.path} component={route.component} />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;