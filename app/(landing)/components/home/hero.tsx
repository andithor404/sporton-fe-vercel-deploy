import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src={"/images/img-basketball.png"}
          width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute left-0 -top-20"
        ></Image>{" "}
        {/* Atur gambar basketball grayscale*/}
        <div className=" relative ml-40 w-full">
          <div className="bg-primary/11 w-[151px] h-[37px] rounded-full flex justify-center items-center">
            <div className="text-primary italic">Friday Sale, 50%</div>
          </div>

          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight  from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br />
            TOP QUALITY
            <br />
            SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-8">
            <Button>
              Explore More<FiFastForward></FiFastForward>
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon play video"
                height={29}
                width={29}
              ></Image>
            </Button>
          </div>
        </div>
        <Image
          src={"/images/img-hero.png"}
          alt="Image sporton hero"
          width={700}
          height={950}
          className="absolute -right-5 top-1/2 -translate-y-1/2"
        ></Image>{" "}
        {/*Atur gambar utama yaitu sepatu dan gagang raket tenis */}
      </div>
      <Image
        src={"/images/img-ornament-hero.svg"}
        alt="ornaments"
        width={420}
        height={420}
        className="absolute -right-[200px] top-1/2 -translate-y-1/2"
      ></Image>{" "}
      {/* Atur ornamen orange di sebelah kanan*/}
    </section>
  );
};

export default HeroSection;
