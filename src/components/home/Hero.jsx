import Carousel from "../others/Carousel";
import HeroContent from "../others/HeroContent";

export const Hero = () => {
  const arr = [];
  for (let index = 0; index < 8; index++) {
    arr.push(<HeroContent key={index} />);
  }

  return (
    <>
      <section className="flex justify-center">
        <Carousel specialClasses="basis-[90%]">{arr}</Carousel>
      </section>
    </>
  );
};
