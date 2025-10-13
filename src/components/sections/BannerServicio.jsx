import React from "react";

const BannerServicio = () => {
  return (
    <div className="h-[800px]  bg-black relative md:h-[1100px] lg:h-[600px] md:my-0 lg:my-0">
      <img src="https://images.pexels.com/photos/207555/pexels-photo-207555.jpeg" alt="motocicleta" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 bg-black/90 w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-5 lg:px-18">
        <div className="text-white container mx-auto py-24 px-10 ">
          <h3 className="text-4xl titulo text-center lg:text-start md:text-start">
            Lorem ipsum dolor sit amet consectetur
            <span className="text-naranja"> adipisicing</span>.
          </h3>
          <div className="mt-4 text-center lg:text-start md:text-start">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              asperiores molestiae fugiat? Expedita, doloribus sunt.
            </p>
          </div>

          <div className="grid grid-cols-2 mt-5 gap-4 md:gap-6">
            <div className="text-center lg:text-start md:text-start">
              <div className="flex gap-2 items-center">
                <h4 className="text-2xl text-naranja titulo">Mecanica en general</h4>
              </div>
              <div className="mt-2 w-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  facere. Sit, consequuntur.
                </p>
              </div>
            </div>
            <div className="text-center lg:text-start md:text-start">
              <div className="flex gap-2 items-center">
                <h4 className="text-2xl text-naranja titulo">Mecanica en general</h4>
              </div>
              <div className="mt-2 w-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  facere. Sit, consequuntur.
                </p>
              </div>
            </div>
            <div className="text-center lg:text-start md:text-start">
              <div className="flex gap-2 items-center">
                <h4 className="text-2xl text-naranja titulo">Mecanica en general</h4>
              </div>
              <div className="mt-2 w-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  facere. Sit, consequuntur.
                </p>
              </div>
            </div>
            <div className="text-center lg:text-start md:text-start">
              <div className="flex gap-2 items-center">
                <h4 className="text-2xl text-naranja titulo">Mecanica en general</h4>
              </div>
              <div className="mt-2 w-full">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  facere. Sit, consequuntur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white container mx-auto py-24 md:py-0 px-10 lg:py-20">
           <img src="https://media.istockphoto.com/id/2083542243/es/foto/mec%C3%A1nico-revisando-el-motor-de-una-motocicleta-en-un-taller-de-reparaci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=ImiPAgk7AVhKVggmLB6ANPF-lQjJ9L4-kokyV3Jbkj8=" alt="mecanico"
           className="w-full h-full object-cover hidden md:block" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default BannerServicio;
