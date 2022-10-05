import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from 'react-query/types/core';
import { QueryClientProvider } from 'react-query/types/react';
import GlobalStyle from "./styled/globalStyled";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <>
        <QueryClientProvider client={queryClient}></QueryClientProvider>
        <GlobalStyle />
        <App />
    </>
);

