import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

const AppWithRouter = () => (
  <Router>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </Router>
);

rootElement.render(<AppWithRouter />);
