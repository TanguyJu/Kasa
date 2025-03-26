import { useParams, Navigate } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../styles/logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <i
              key={n}
              className={
                n <= parseInt(logement.rating)
                  ? "fa-solid fa-star star filled"
                  : "fa-solid fa-star star"
              }
            />
            ))}
          </div>
        </div>
      </div>

      <div className="logement-collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}