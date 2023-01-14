import React from "react";
import { LOGIN_ROUTE, CHAT_ROUTE } from "../utils/consts";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publickRoutes } from "../routes";
import Login from "./Login";
import Chat from "./Chat";

function AppRouter() {
  const user = true;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component} />
      ))}
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publickRoutes.map(({ path, Component }) => (
        <Route path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;

// Описание маршрутов по которым можно переходить в прилоении
