import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'notes/',
    element: <Notes />,
  },
  {
    path: 'create/',
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
