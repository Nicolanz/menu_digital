import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
}
