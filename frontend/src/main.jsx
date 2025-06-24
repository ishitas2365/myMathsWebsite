import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import Programs from './pages/Programs';
import BTech from './pages/BTech';
import MSc from './pages/MSc';
import PhD from './pages/PhD';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/programs',
        element: <Programs />,
        children: [
          {path: 'btech', element: <BTech />},
          {path: 'msc', element: <MSc />},
          {path: 'phd', element: <PhD />},
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
