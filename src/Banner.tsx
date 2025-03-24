import Image from "next/image";
import { baseUrl } from "./config";

function Banner() {
  return (
    <section
      className="relative xl:h-[663px] h-max w-full bg-[#F2F0F1]"
      id="hero"
    >
      <div className="relative mx-auto xl:w-7xl flex flex-col gap-6 h-full items-center xl:items-start xl:p-0 p-10 justify-center">
        <div className="absolute inset-0 xl:block hidden">
          <Image
            src={`${baseUrl}/HeroBg.png`}
            alt="heroBg"
            width={1500}
            height={663}
            className="w-full h-full object-cover bg-transparent"
          />
        </div>
        <div className="max-w-[577px] space-y-6 relative">
          <h1 className="uppercase font-header text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-[210px] h-[52px] rounded-full bg-black text-white">
            Shop Now
          </button>
          <div className="flex xl:items-center items-start relative justify-start gap-6">
            <div className="">
              <h1 className="font-bold text-xl xl:text-5xl">200+</h1>
              <p className="text-sm xl:text-base">International Brands</p>
            </div>
            <div className="bg-black/10 w-px h-full relative" />
            <div className="">
              <h1 className="font-bold text-xl xl:text-5xl">2,000+</h1>
              <p className="text-sm xl:text-base">High-quality Products</p>
            </div>
            <div className="bg-black/10 w-px h-full relative" />
            <div className="">
              <h1 className="font-bold text-xl xl:text-5xl">30,000+</h1>
              <p className="text-sm xl:text-base">Happy Customers</p>
            </div>
          </div>
        </div>
        <Image
          width={104}
          height={104}
          src={`${baseUrl}/Blink-big.png`}
          alt="blink-blink big"
          className="absolute top-20 right-20 xl:block hidden"
        />
        <Image
          width={56}
          height={56}
          src={`${baseUrl}/Blink-small.png`}
          alt="blink-blink small"
          className="absolute top-1/2 xl:block hidden -translate-y-1/2 right-1/2 translate-x-10"
        />
      </div>
    </section>
  );
}

export default Banner;
