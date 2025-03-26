import React from "react";
import Banner from "../components/banner.jsx";
import Card from "../components/card.jsx";
import data from "../data/data.json";
import "../styles/home.scss";
import bannerImage from "../assets/image-banner.png";

const Home = () => {
  return (
    <div className="home">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <div className="card-container">
      {data.map((logement) => (
  <Card key={logement.id} title={logement.title} cover={logement.cover} id={logement.id} />
))}
      </div>
    </div>
  );
};

export default Home;