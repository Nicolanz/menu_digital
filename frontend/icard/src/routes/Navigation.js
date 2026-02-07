
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
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props)=> (
                            <route.layout>
                                <route.component {...props} />
                            </route.layout>
                        )}
                    />
                })}
            </Routes>
        </Router>
        );
}
