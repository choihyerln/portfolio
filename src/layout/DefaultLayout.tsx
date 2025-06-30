import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
