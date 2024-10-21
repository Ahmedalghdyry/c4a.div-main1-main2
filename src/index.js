import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import JavaScript from './pages/javascript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // errorفي حالت حدوث
    errorElement:  <h1>SORRY...........</h1>,
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  },
  {
    path: "/javaScript",
    element: <JavaScript/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
