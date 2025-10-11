import React from "react";

const Portada = () => {
  return (
    <div className="portada h-[600px] relative">
      <img
        src="https://images.pexels.com/photos/115145/pexels-photo-115145.jpeg"
        alt="motomecanica"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-o bg-black/70 flex  flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-white mb-4">
          Servicios de motomecanica
        </h1>
        <div className="w-[600px]">
          <p className="text-lg text-white">
            Ofrecemos una amplia gama de servicios de motomecanica para
            satisfacer las necesidades de nuestros clientes. las necesidades de
            nuestros clientes.
          </p>
        </div>
        <div className="mt-10">
            <button className="py-4 px-14 color-naranja text-white">consulta presupuesto</button>
        </div>
      </div>
    </div>
  );
};

export default Portada;
