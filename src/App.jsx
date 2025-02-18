import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignupPage,
  LoginPage,
  Settings,
  ProfilePage,
  HomePage,
} from "./pages";
import Navbar from "./components/Navbar";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
