import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import {useRecoilValue} from "recoil"
import Home from "routes/Home";
import Auth from "routes/Auth";
import {authState} from "states/atom";
import {AUTH_MODAL} from "constans/routers";
import AuthModal from "../routes/AuthModal";

function AppRouter() {
    const location = useLocation();
    const isSignedIn = useRecoilValue(authState);
    const background = location.state && location.state.background;

    return (
        <>
            <Routes location={background?.location || location}>
                {
                    isSignedIn ?
                        <Route index element={<Home/>}/> :
                        <Route index element={<Auth/>}/>
                }
            </Routes>
            {
                background &&
                <Routes>
                    <Route path={`${AUTH_MODAL}`} element={<AuthModal isSignUp={background.isSignUp}/>}/>
                </Routes>
            }
        </>

    );
}

export default AppRouter;