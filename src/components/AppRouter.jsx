import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";

const AppRouter = () => {
    let isAuth = true
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(rout =>
                    <Route
                        key={rout.path}
                        path={rout.path}
                        element={rout.element}
                        index={rout.index}
                    />)}
                <Route path="*" element={<Login/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(rout =>
                    <Route
                        key={rout.path}
                        path={rout.path}
                        element={rout.element}
                        index={rout.index}
                    />)}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;