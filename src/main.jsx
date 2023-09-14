import React from 'react';
import ReactDOM from 'react-dom';'react-router-dom';
import App from './App';
import { Suspense } from 'react';
import {  BrowserRouter as Router, useRoutes,} from 'react-router-dom';

import routes from '~react-pages'

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)