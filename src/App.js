import React from 'react';
import Routes from './routes/routes';
import {
  BrowserRouter
} from "react-router-dom";
import './styles/globalStyles.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './utils/client';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <BrowserRouter> */}
        <Routes />
      {/* </BrowserRouter> */}
    </ApolloProvider>
  );
}

export default App;
