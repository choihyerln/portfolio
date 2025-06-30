import BusinessCard from "@/pages/BusinessCard";
import Home from "@/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layout/DefaultLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BusinessCard />} />
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
