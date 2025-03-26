import logo from "../assets/logo-footer.png";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}