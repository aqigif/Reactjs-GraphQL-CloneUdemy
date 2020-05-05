import React from 'react';
import Routes from './routes/routes';
import {
  BrowserRouter
} from "react-router-dom";
import './styles/globalStyles.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
