import React from "react";

const Servicios = () => {
  const services = [
    {
      icon: "🔧",
      title: "Mecánica General",
      description:
        "Diagnóstico completo, reparación y mantenimiento integral de todo tipo de motos.",
    },
    {
      icon: "⚙️",
      title: "Cambio de Aceite y Filtros",
      description:
        "Servicio rápido con productos originales y control de niveles para un mejor rendimiento.",
    },
    {
      icon: "🔋",
      title: "Revisión Eléctrica",
      description:
        "Chequeo del sistema eléctrico, luces, batería y arranque para garantizar tu seguridad.",
    },
  ];


  return (
    <div className="h-[500px] container px-5 mx-auto my-10">
      <div className="flex justify-center items-center flex-col pt-15 gap-3">
        <h2 className="text-5xl">Nuestros Servicios</h2>
        <p className="text-2xl">
          Todo lo que tu moto necesita en un solo lugar
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-15 px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-[#47596D] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4 text-[#AFCEE2] text-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-sm text-center text-gray-200">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
