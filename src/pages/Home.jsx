import React from "react";
import Portada from "../components/sections/Portada";
import Servicios from "../components/sections/Servicios";
import BannerServicio from "../components/sections/BannerServicio";
import ServiciosCards from "../components/sections/ServiciosCards";
import Testimonios from "../components/sections/Testimonios";

const Home = () => {
  return (
    <div className="main">
      <section>
        <Portada></Portada>
      </section>
      <section className="fondo-gradient">
        <Servicios></Servicios>
      </section>
      <section className="fondo-gradient">
        <BannerServicio></BannerServicio>
      </section>
      <section className="fondo-gradient">
        <ServiciosCards></ServiciosCards>
      </section>
      <section className="fondo-gradient">
        <Testimonios></Testimonios>
      </section>
    </div>
  );
};

export default Home;
