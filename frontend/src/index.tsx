import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Menu } from './components/menu.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App Component={Menu} pageProps={undefined}/>
  </React.StrictMode>
);