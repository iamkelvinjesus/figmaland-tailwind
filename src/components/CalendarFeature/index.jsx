import { Heading } from "../Heading";
import { Button } from "../Button/button";

import CalendarImage from "../../assets/images/features/CalendarFeature.png";

 const CalendarFeature = () => {
  return (
    <section className="bg-white py-[90px] px-5 xl:px-0">
      <div className="w-full max-w-[400px] flex flex-col justify-center items-center mx-auto lg:flex-row lg:max-w-[1240px] lg:gap-[50px]">
        <div className="flex flex-col mb-[60px] lg:mb-0">
          <Heading
            type="h2"
            className="text-center lg:text-left lg:max-w-[335px]"
          >
            A maneira mais rápida de organizar
          </Heading><br />

          <Heading
            type="h4"
            className="mb-[60px] mt-4 text-center lg:text-left lg:mb-[70px] lg:max-w-[532px]"
          >
            A maioria dos calendários é projetada para equipes. O Slate é
            projetado para freelancers
          </Heading><br />

          <Button className="lg:max-w-[236px]">
            Experimente gratuitamente
          </Button>
        </div>

        <img src={CalendarImage} />
      </div>
    </section>
  );
};

export default CalendarFeature;