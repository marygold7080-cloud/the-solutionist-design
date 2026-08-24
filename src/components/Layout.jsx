import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#000000] text-slate-100 antialiased selection:bg-gold-500/30">
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}