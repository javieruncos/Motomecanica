import React from "react";
import Portada from "../components/sections/Portada";
import Servicios from "../components/sections/Servicios";
import BannerServicio from "../components/sections/BannerServicio";
import ServiciosCards from "../components/sections/ServiciosCards";
import Testimonios from "../components/sections/Testimonios";
import Contacto from "../components/sections/Contacto";
import Preguntas from "../components/sections/Preguntas";

const Home = () => {
  return (
    <div className="main">
      <section>
        <Portada></Portada>
      </section>
      <section className="fondo-gradient scroll-smooth scroll-mt-24" id="servicios">
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
      <section className="fondo-gradient scroll-smooth scroll-mt-24" id="contacto">
        <Contacto></Contacto>
      </section>
      <section>
        <Preguntas></Preguntas>
      </section>
    </div>
  );
};

export default Home;
