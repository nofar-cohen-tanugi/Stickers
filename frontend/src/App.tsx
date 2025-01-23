// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Print } from './components/print.tsx';

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component }) => {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="/print" element={<Print />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;