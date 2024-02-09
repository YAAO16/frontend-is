import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Login.css';
import Routes from './routes/Routes';
import {
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from './context/Context';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <ContextProvider>
      <RouterProvider router={Routes} />
    </ContextProvider>

  </React.StrictMode>
);
