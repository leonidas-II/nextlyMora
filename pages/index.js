import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Divider  from "../components/divider";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";


const Home = () => {
  return (
    <>
      <Head>
        <title>Impacto Sobre Ruedas</title>
        <meta
          name="Impacto Sobre Ruedas"
          content="Impacto desde y hasta el final de carrera."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Beneficios de Impacto Sobre Ruedas"
        title="¿Por qué elegirnos?">
        ¡Rompiendo barreras en la publicidad! Transformamos los tediosos atascos de la ciudad en oportunidades de 
        impacto. Introducimos la publicidad en movimiento,
        aprovechando los momentos en que la gente está atrapada en el tráfico para dejar una impresión duradera.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      <Divider/>
      <SectionTitle
      id="Estretegia" 
        pretitle="Aprende como funcionamos"
        title="Dinos que necesitas y diseñaremos una estrategia para ti">
        Entendemos la importancia de ajustarnos a tu presupuesto. Nuestro objetivo es impactar a la mayor cantidad de 
        personas posibles. Con flotas tanto en ciudades como a nivel nacional, estamos listos para llevar tu mensaje donde sea necesario. 
      </SectionTitle>
      <Testimonials />
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq /> */}
      <Cta />
      <Footer />
     
    </>
  );
}

export default Home;