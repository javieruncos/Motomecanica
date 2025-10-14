import React, { Suspense } from "react";
import Portada from "../components/sections/Portada";
import Servicios from "../components/sections/Servicios";
import Contacto from "../components/sections/Contacto";
import Preguntas from "../components/sections/Preguntas";

const BannerServicioLazy = React.lazy(() =>
  import("../components/sections/BannerServicio")
);
const ServiciosCardsLazy = React.lazy(() =>
  import("../components/sections/ServiciosCards")
);
const TestimoniosLazy = React.lazy(() =>
  import("../components/sections/Testimonios")
);

const Home = () => {
  return (
    <div className="main">
      <section>
        <Portada />
      </section>
      <section
        className="fondo-gradient scroll-smooth scroll-mt-24"
        id="servicios"
      >
        <Servicios />
      </section>
      <Suspense
        fallback={
          <div className="text-center py-20 text-white">Cargando Banner...</div>
        }
      >
        <section className="fondo-gradient">
          <BannerServicioLazy />
        </section>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-center py-20 text-white">
            Cargando Servicios Destacados...
          </div>
        }
      >
        <section className="fondo-gradient">
          <ServiciosCardsLazy />
        </section>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-center py-20 text-white">
            Cargando Testimonios...
          </div>
        }
      >
        <section className="fondo-gradient">
          <TestimoniosLazy />
        </section>
      </Suspense>
      <section
        className="fondo-gradient scroll-smooth scroll-mt-24"
        id="contacto"
      >
        <Contacto />
      </section>

      <section>
        <Preguntas />
      </section>
    </div>
  );
};

export default Home;
