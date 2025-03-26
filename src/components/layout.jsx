import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import "../styles/layout.scss";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}