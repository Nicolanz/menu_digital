
import React from "react";
import routes from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { map } from "lodash";

console.log("Routes", routes);

export function Navigation() {
    return (
        <Router>
            <Routes>
                {map(routes, (route, index) => {
                    return <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                })}
            </Routes>
        </Router>
    );
}
