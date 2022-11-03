import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";

import Home from "../pages/home";
import NotFound from "../pages/notfound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};