import React from "react";

const ServiciosCards = () => {
  return (
    <div className="h-[800px] fondo-gradient">
      <div className="text-center pt-30 flex flex-col gap-2">
        <h3 className="text-5xl">Servicios destacados</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iusto!
        </p>
      </div>
      <div className="container mx-auto px-15 mt-15">
        <div className="grid grid-cols-3 gap-4 bg-red-500 w-full">
               <div className="h-auto">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="p-3">
              <h4 className="text-2xl">Mecanica General</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-5">
                <button className="color-naranja px-10 py-4">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          <div className="h-auto">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="p-3">
              <h4 className="text-2xl">Mecanica General</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                facere. Sit, consequuntur.
              </p>
              <div className="mt-5">
                <button className="color-naranja px-10 py-4">
                  Consultar un presupuesto
                </button>
              </div>
            </div>
          </div>
          <div className="h-[400px]">
            <div className="h-[250px] ">
              <img
                src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8="
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
