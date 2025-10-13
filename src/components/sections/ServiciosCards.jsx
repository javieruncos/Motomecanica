import React from "react";

const ServiciosCards = () => {
  return (
    <div className="h-auto fondo-gradient">
      <div className="text-center pt-12 sm:pt-16 md:pt-20 flex flex-col gap-2">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold titulo">
          Servicios destacados
        </h3>
        <p className="text-sm sm:text-base md:text-lg px-4 sm:px-10 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto!
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-10 mt-8 sm:mt-12 pb-10 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden">
            <div className="h-56 sm:h-64 md:h-72 lg:h-80">
              <img
                src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-8 bg-[#ffffff]">
              <h4 className="text-xl sm:text-2xl md:text-2xl font-bold titulo">
                Mecanica General
              </h4>
              <p className="text-sm sm:text-base md:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-4 sm:mt-5">
                <button className="color-naranja px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-2xl overflow-hidden">
            <div className="h-56 sm:h-64 md:h-72 lg:h-80">
              <img
                src="https://media.istockphoto.com/id/1188645501/es/foto/mec%C3%A1nico-de-motocicletas.jpg?b=1&s=612x612&w=0&k=20&c=aJuruoRUU8q3ERtYuOiqRWK4m4D0i_9S9rikHPQrS24="
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-8 bg-[#ffffff]">
              <h4 className="text-xl sm:text-2xl md:text-2xl font-bold titulo">
                Services Completo
              </h4>
              <p className="text-sm sm:text-base md:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-4 sm:mt-5">
                <button className="color-naranja px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden">
            <div className="h-56 sm:h-64 md:h-72 lg:h-80">
              <img
                src="https://media.istockphoto.com/id/1161780173/es/foto/servicio-de-neum%C3%A1ticos-de-una-rueda-de-motocicleta.jpg?b=1&s=612x612&w=0&k=20&c=0bl1ZXhJGCuR63rm7aB5Z15L1MjlRucz3a_pkd605Y8="
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-8 bg-[#ffffff]">
              <h4 className="text-xl sm:text-2xl md:text-2xl font-bold titulo">
                Electricidad General
              </h4>
              <p className="text-sm sm:text-base md:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-4 sm:mt-5">
                <button className="color-naranja px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden hidden lg:hidden md:block">
            <div className="h-56 sm:h-64 md:h-72 lg:h-80">
              <img
                src="https://media.istockphoto.com/id/1161780173/es/foto/servicio-de-neum%C3%A1ticos-de-una-rueda-de-motocicleta.jpg?b=1&s=612x612&w=0&k=20&c=0bl1ZXhJGCuR63rm7aB5Z15L1MjlRucz3a_pkd605Y8="
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 sm:px-5 pt-4 sm:pt-5 pb-8 bg-[#ffffff]">
              <h4 className="text-xl sm:text-2xl md:text-2xl font-bold titulo">
                Electricidad General
              </h4>
              <p className="text-sm sm:text-base md:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-4 sm:mt-5">
                <button className="color-naranja px-6 sm:px-8 py-3 sm:py-4 text-white text-sm sm:text-base">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="container mx-auto px-4 sm:px-10 pb-12 sm:pb-20 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Box 1 */}
          <div className="h-auto py-10 sm:h-80 md:h-auto lg:h-80 lg:py-0 color-naranja px-4 sm:px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-2xl gap-4">
            <div className="pt-5 flex flex-col items-center justify-center">
              <div className="text-center md:text-center lg:text-start lg:px-5">
                <h5 className="text-3xl sm:text-2xl md:text-2xl font-bold text-white titulo">
                  Venta de Repuestos
                </h5>
                <p className="text-sm sm:text-base text-white mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente,
                </p>
                <button className="py-3 sm:py-5 px-6 sm:px-10 color-negro mt-4 sm:mt-5 text-white text-sm sm:text-base">
                  Consultar precios
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://i0.wp.com/www.vectorizando.com/wp-content/uploads/2022/08/Vector-Motorcycle-Spares-Concept-Convertido-847061d9.png?fit=500%2C500&ssl=1"
                alt=""
                className="w-full h-40 sm:h-56 md:h-full object-contain"
              />
            </div>
          </div>
          {/* Box 2 */}
          <div className="h-auto py-10 sm:h-80 md:h-auto lg:h-80 lg:py-0 bg-black px-4 sm:px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-2xl gap-4 ">
            <div className="pt-5 flex flex-col items-center justify-center ">
              <div className="text-center md:text-center lg:text-start lg:px-5">
                <h5 className="text-3xl sm:text-2xl md:text-2xl font-bold text-naranja titulo">
                  Servicio completo
                </h5>
                <p className="text-sm sm:text-base text-white mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente,
                </p>
                <button className="py-3 sm:py-5 px-6 sm:px-10 color-naranja mt-4 sm:mt-5 text-white text-sm sm:text-base">
                  Consultar precios
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://nrmotoco.com/wp-content/uploads/2022/08/RXT-726X-Warrior-Helmet-Left-Front-Angle-Visor-Up-300x300-1.png"
                alt=""
                className="w-full h-40 sm:h-56 md:h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosCards;
