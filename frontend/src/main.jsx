import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PeoplePage from './pages/PeoplePage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import PhdProgramPage from './pages/PhdProgramPage';
import MscProgramPage from './pages/MscProgramPage';
import BtechProgramPage from './pages/BtechProgramPage';

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
        path:'research',
        element:<ResearchPage/>
      },
      {
        path:'programs/phd',
        element:<PhdProgramPage/>
      },
      {
        path:'programs/msc',
        element:<MscProgramPage/>
      },
      {
        path:'programs/btech',
        element:<BtechProgramPage/>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
