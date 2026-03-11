import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Registre from "./pages/Registre/Registre";
import Dashboard from "./pages/Dashboard/Dashboard";
import GenerateAi from "./pages/GenerateAi/GenerateAi";
import DashboardLayout from "./DashboardLayout";
import Clients from "./pages/Clients/Clients";

const RedirectHandler = () => {
  const token = localStorage.getItem("token");
  console.log("Checking token for redirect:", token);
  return token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registre" element={<Registre />} />

      <Route path="*" element={<RedirectHandler />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="clients" element={<Clients />} />
        <Route path="/generate-ai" element={<GenerateAi />} />
      </Route>
    </Routes>
  );
};

export default App;
