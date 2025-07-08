import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import Programs from './pages/Programs';
import BTech from './pages/BTech';
import MSc from './pages/MSc';
import PhD from './pages/PhD';
import LoginPage from './pages/LoginPage';
import PeoplePage from './pages/PeoplePage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import GalleryPage from './pages/GalleryPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path:'/',
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
      },
      {

        path:'login',
        element:<LoginPage/>
      },
      {
        path:'people',
        element:<PeoplePage/>
      },
      {
        path:'contact',
        element:<ContactPage/>
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path:'research',
        element:<ResearchPage/>
      },
      {
        path:'gallery',
        element:<GalleryPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
