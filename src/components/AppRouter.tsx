import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil"
import Home from "routes/Home";
import Auth from "routes/Auth";
import {authState} from "states/atom";
import {AUTH_MODAL} from "constans/routers";
import AuthModal from "../routes/AuthModal";

function AppRouter() {
    const location = useLocation();
    console.log(location);
    const isSignedIn = useRecoilValue(authState);
    const background = location.state && location.state.background;
    console.log(background);
    return (
        <>
            <Routes location={background || location}>
                {isSignedIn ?
                    <Route index element={<Home/>}/> :
                    <Route index element={<Auth/>}/>
                }

            </Routes>
            {
                background &&
                <Routes>
                    <Route path={`${AUTH_MODAL}`} element={<AuthModal/>}/>
                </Routes>
            }
        </>

    );
}

export default AppRouter;