import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(rout =>
                <Route
                    path={rout.path}
                    component={rout.component}
                    exact={rout.exact}
                />)}
            <Route path="*" element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;