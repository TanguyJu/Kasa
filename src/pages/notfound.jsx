import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="home-link">Retourner sur la page d'accueil</Link>
    </div>
  );
}
