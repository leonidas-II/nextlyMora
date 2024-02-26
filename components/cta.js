import React from "react";
import Image from "next/image";
import Container from "./container";
import whatsIm from "../public/img/brands/WhatsAppButtonGreenLarge.svg";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            PREPARADO PARA INICIAR EN CARRETERA
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Llegamos hasta donde se termina e inicia una nueva
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a aria-label="Chat on WhatsApp"
            href="https://wa.me/524722316084?text=Información%20de%20planes">
            <Image alt="Chat on WhatsApp"
              src={whatsIm}
              width="216"
              height="217"
              className={"object-cover"}
              loading="eager"

            />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;