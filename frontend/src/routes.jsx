/* eslint-disable */
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';

import App from './App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/add',
        element: <AddStudent />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  }
]);
