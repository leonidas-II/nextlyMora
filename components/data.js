import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/cochelado.jpeg";
import benefitTwoImg from "../public/img/cocheatras.jpeg";

const benefitOne = {
  title: "¿Sabías que?",
  desc: "Un camión, en promedio, recorre 150,000 kilómetros al año lo que significa  que pasa frente a otros 24,200,000 de vehículos. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Alcance",
      desc: "2,016,666 de impactos mensuales de media.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Rompiendo la barrera",
      desc: "El 84% de la sociedad ha levantado una muralla contra la publicidad, cansada del abuso que ha dominado nuestros espacios. Es hora de reinventar cómo nos conectamos con las personas (Forbes).",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Deja que te vean",
      desc: "El 30% de los consumidores indican que basan sus decisiones de compra en los anuncios que ven.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};



const benefitTwo = {
  title: "Mientras que...",
  desc: "Un vehículo de media recorre 20.000 kilómetros al año.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Lo que supone que pasará frente a otros 8,500,000 vehículos",
      desc: "Lo que se refleja en más de 700mil impactos al mes",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Los ojos en tu producto",
      desc: "El 92% de los encuestados declaran que de hecho leen la información de los gráficos de vehículos.",
      icon: <EyeIcon />,
    },
    {
      title: "Deja tu marca en sus mentes",
      desc: "El 98% de los encuestados creen que los gráficos de flota crean una imagen positiva de marca. ",
      icon: <BookmarkSquareIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
