import React from "react";

const BotonWsp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <span
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-5 py-3 rounded-lg shadow-md text-sm opacity-0
       group-hover:opacity-100 transition-opacity duration-300 hidden md:block
       w-[200px]"
      >
        ¡Chatea con nosotros!
      </span>
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center 
                   bg-green-500 text-white rounded-full shadow-lg shadow-green-500/40
                   transition-all duration-300 hover:scale-110 hover:shadow-green-400/60
                   w-12 h-12 md:w-14 md:h-14"
      >
        <i className="bi bi-whatsapp text-2xl md:text-3xl"></i>
      </a>
    </div>
  );
};

export default BotonWsp;
