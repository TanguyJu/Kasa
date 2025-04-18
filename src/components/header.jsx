import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">
      <img src={logo} alt="Kasa" className="logo" />
      </NavLink>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}