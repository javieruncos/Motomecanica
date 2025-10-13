import React from "react";

const Servicios = () => {
  return (
    <div className="h-auto md:h-[770px] lg:h-[600px] py-20  md:pt-30 fondo-gradient md:pb-0 lg:pb-0">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold titulo">
          Nuestros Servicios
        </h2>
        <p className="text-lg md:text-2xl">
          Todo lo que tu moto necesita en un solo lugar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-15 container px-6 md:px-10 mx-auto">
        {/* Servicio 1 */}
        <div className="p-6 color-negro rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4 text-naranja text-center">
            <i className="bi bi-gear-fill"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            Mecánica General
          </h3>
          <p className="text-sm text-center text-gray-200">
            Diagnóstico completo, reparación y mantenimiento integral de todo
            tipo de motos.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="p-6 color-negro rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4 text-naranja text-center">
            <i className="bi bi-droplet-half"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            Cambio de Aceite y Filtros
          </h3>
          <p className="text-sm text-center text-gray-200">
            Servicio rápido con productos originales y control de niveles para
            un mejor rendimiento.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="p-6 color-negro rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4 text-naranja text-center">
            <i className="bi bi-lightning-charge-fill"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            Revisión Eléctrica
          </h3>
          <p className="text-sm text-center text-gray-200">
            Chequeo del sistema eléctrico, luces, batería y arranque para
            garantizar tu seguridad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
