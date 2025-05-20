import { Button } from "../Button/button";
import { Heading } from "../Heading";

import IbmLogo from "../../assets/images/brands/logos_ibm.png";
import  TestimonialPerson  from "../../assets/images/testimonials/Ellipse 2.png";

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[360px]  md:max-w-[900px] mx-auto flex flex-col items-center justify-center gap-[80px] md:px-5 xl:px-0 " >
        <Heading type="h2" className="w-fit   " >Testemunhos </Heading>

      <div className="flex flex-col py-4 items-center justify-center gap-11 " >
        <img src={IbmLogo}  />
        <p className="text-center text-sm text-secondary-text font-bold w-full max-w-[280px] md:max-w-none  md:text-2xl md:font-normal " >
          A maioria dos calendários é projetada para equipes. O Slate foi
          desenvolvido para freelancers que buscam uma maneira simples de
          planejar sua agenda.
        </p>
      </div>

      <div className="flex gap-3 justify-center items-center">
        <img src= {TestimonialPerson} />
      </div>

      <div>
        <p  className="text-xs font-bold text-secondary-text">Organizar em</p>
        <p className="text-sm text-black" >Ui Designer</p>
      </div>

      <Button className="w-full max-w-[280px]" >Mais testemunhas </Button>
      </div>
    </section>
  );
};
