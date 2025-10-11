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
      <section className="container px-5 mx-auto my-10">
        <Servicios></Servicios>
      </section>
      <section className="container px-5 mx-auto my-10">
        <BannerServicio></BannerServicio>
      </section>
      <section className="container px-5 mx-auto my-10">
        <ServiciosCards></ServiciosCards>
      </section>
      <section className="container px-5 mx-auto my-10">
        <Testimonios></Testimonios>
      </section>
    </div>
  );
};

export default Home;
