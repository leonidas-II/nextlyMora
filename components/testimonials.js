import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/marketingIm.jpg";
import userTwoImg from "../public/img/rutas.jpg";
import userThreeImg from "../public/img/tarifas.png";

const Testimonials = () => {
  return (
    <Container >
      <div  className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Tiempo de Campañas <Mark> 3, 6 y 12 meses</Mark>
              donde desarrollamos un diseño para ti o mandanos un diseño y nosotros lo imprimimos.<Mark>  Textos virales. </Mark>
            </p>

            <Avatar
              image={userOneImg}
              name="CAMPAÑAS"
              title="Tu alidado en Marketing"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
             Todas nuestras rutas <Mark>siempre en moviemiento</Mark>. Todos nuestros camiones, trailers y vehículos 
             disponen de GPS y sabemos los <Mark> kilómetros que tu marca recorre diarios</Mark> y qué rutas hace.
            </p>

            <Avatar
              image={userTwoImg}
              name="RUTAS"
              title="Lleva tu presencia a todas partes"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Todas nuestras tarifas <Mark>adaptables</Mark> dependiendo del número de vehículos a contratar. 
              Nos encargamos de la <Mark> limpieza de los rótulos</Mark> y que se vean espectaculares. 
            </p>

            <Avatar
              image={userThreeImg}
              name="TARIFAS"
              title="Adaptables para ti"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;