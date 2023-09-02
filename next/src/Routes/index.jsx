/**
 *  @version 1.0.1
 *  @author alexis
 *  @description Manejo de todas las rutas de la aplicación
 * 	@process 3
 */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private";
import { LoginPage } from "./imports.js";
import { DashboardHumanResourses } from "../pages/Home/DashboardHumanResourses";
import {Colaborators} from "../pages/Colaborators";

const routes = [
  { path: "/login", element: <LoginPage /> },
  { path: "/humanResourses", element: <DashboardHumanResourses /> },
  { path: "/asistencias", element: <Colaborators /> },
];

const RoutesModule = () => (
 
    <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />} exact>
              {routes.map((route, idx) => (  <Route key={idx} path={route.path} exact element={route.element} />  ))}
          </Route>
        </Routes>
    </BrowserRouter>

);

export default RoutesModule;
