import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpeg";
import whatsImg from "../public/img/brands/WhatsAppButtonGreenLarge.svg";
import Carusel from "./carusel"


const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            ¡HAZ QUE TU EMPRESA SE CONOZCA DESDE EL PRIMER DÍA SIN GRANDES INVERSIONES! 
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        La nueva era de la publicidad. 
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">

              <a aria-label="Chat on WhatsApp"
                href="https://wa.me/524722316084?text=Información%20de%20planes">
                <Image alt="Chat on WhatsApp"
                  src={whatsImg}
                  width="216"
                  height="217"
                  className={"object-cover"}
                  loading="eager"

                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div  className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
          Educa, informa y convence. <span className="text-indigo-600">Deja una huella duradera</span>{" "} en los tráficos
            
          </div>


          <Carusel />



        </div>
      </Container>
    </>
  );
}

export default Hero;