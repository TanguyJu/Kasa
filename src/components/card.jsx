import React from "react";
import "../styles/card.scss";
import { Link } from "react-router-dom";

export default function Card({ title, cover, id }) {
  return (
    <Link to={`/logement/${id}`} className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card-title">{title}</div>
    </Link>
  );
}