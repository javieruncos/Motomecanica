import React from "react";

const ServiciosCards = () => {
  return (
    <div className="h-auto fondo-gradient">
      <div className="text-center pt-30  flex flex-col gap-2">
        <h3 className="text-5xl font-bold">Servicios destacados</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto!
        </p>
      </div>
      <div className="container mx-auto px-15 mt-15 pb-10 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="px-5 pt-5 pb-10 bg-[#ffffff]">
              <h4 className="text-2xl font-bold">Mecanica General</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-5">
                <button className="color-naranja px-10 py-4 text-white">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/1188645501/es/foto/mec%C3%A1nico-de-motocicletas.jpg?b=1&s=612x612&w=0&k=20&c=aJuruoRUU8q3ERtYuOiqRWK4m4D0i_9S9rikHPQrS24="
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="px-5 pt-5 pb-10 bg-[#ffffff]">
              <h4 className="text-2xl font-bold">Services Completo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-5">
                <button className="color-naranja px-10 py-4 text-white">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/1161780173/es/foto/servicio-de-neum%C3%A1ticos-de-una-rueda-de-motocicleta.jpg?b=1&s=612x612&w=0&k=20&c=0bl1ZXhJGCuR63rm7aB5Z15L1MjlRucz3a_pkd605Y8="
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="px-5 pt-5 pb-10 bg-[#ffffff]">
              <h4 className="text-2xl font-bold">Electricidad General</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-5">
                <button className="color-naranja px-10 py-4 text-white">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-15 pb-30">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[300px]  color-naranja  px-5 grid grid-cols-2 rounded-2xl">
            <div className="pt-5 flex flex-col items-center justify-center">
              <div>
                <h5 className="text-2xl font-bold text-white">
                  Venta de Respuestos
                </h5>
                <p className="text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente,
                </p>
                <button className="py-5 px-10 color-negro mt-5  text-white">
                  Consultar precios
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://i0.wp.com/www.vectorizando.com/wp-content/uploads/2022/08/Vector-Motorcycle-Spares-Concept-Convertido-847061d9.png?fit=500%2C500&ssl=1"
                alt=""
                className=" w-full"
              />
            </div>
          </div>
          <div className="h-[300px]  bg-black  px-5 grid grid-cols-2 rounded-2xl">
            <div className="pt-5 flex flex-col items-center justify-center">
              <div>
                <h5 className="text-2xl font-bold text-naranja">
                  Servicio completos
                </h5>
                <p className="text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente,
                </p>
                <button className="py-5 px-10 color-naranja mt-5  text-white">
                  Consultar precios
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://nrmotoco.com/wp-content/uploads/2022/08/RXT-726X-Warrior-Helmet-Left-Front-Angle-Visor-Up-300x300-1.png"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosCards;
