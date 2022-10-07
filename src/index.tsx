import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import GlobalStyle from "styleds/globalStyled";
import App from 'components/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
root.render(
    <>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyle/>
                <App/>
            </RecoilRoot>
        </QueryClientProvider>
    </>
);

