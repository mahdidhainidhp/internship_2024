import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import WESA2024Page from "./pages/WESA2024Page";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "homepage",
            element: <HomePage />,
        },
        {
            path: "wesa2024page",
            element: <WESA2024Page />,
        },
    ]);

    return element;
};

export default ProjectRoutes;