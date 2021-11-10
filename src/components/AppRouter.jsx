import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

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