import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

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
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
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
      desc: "Lo que se refleja en más de 700mil autos al mes",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
