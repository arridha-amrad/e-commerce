import { Input } from "@headlessui/react";
import Image from "next/image";
import SearchIcon from "@/icons/Search.png";
import CartIcon from "@/icons/Cart.png";
import UserIcon from "@/icons/User.png";
import NewArrivals from "@/NewArrivals";

function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="h-[2.4rem] bg-black text-white flex items-center justify-center">
        <p>
          Sign up and get 20% off to your first order.
          <span className="pl-1 underline font-semibold">Sign Up Now</span>
        </p>
      </div>
      <header className="h-[6rem] w-[1240px] mx-auto flex items-center justify-between">
        <h1 className="font-header block text-4xl pb-1">shop.co</h1>
        <ul className="flex items-center shrink-0 justify-center gap-4">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="relative w-full max-w-[577px]">
          <Input
            className="bg-[#f0f0f0] pl-12 outline-0 w-full px-4 h-[3rem] rounded-full"
            name="search"
            placeholder="Search for products..."
            type="text"
          />
          <div className="absolute top-0 left-0 aspect-square">
            <button className="h-[3rem] flex items-center justify-center aspect-square rounded-full">
              <Image
                src={SearchIcon}
                alt="search icon"
                className="w-[24px] aspect-square"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button>
            <Image src={CartIcon} alt="Cart icon" />
          </button>
          <button>
            <Image src={UserIcon} alt="Cart icon" />
          </button>
        </div>
      </header>
      <section
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}/HeroBg.png)`,
        }}
        className={`relative w-full h-[663px]`}
        id="hero"
      >
        <div className="max-w-[1240px] mx-auto flex flex-col gap-6 h-full justify-center">
          <div className="max-w-[577px] space-y-6">
            <h1 className="uppercase font-header text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="w-[210px] h-[52px] rounded-full bg-black text-white">
              Shop Now
            </button>
          </div>
          <div className="flex items-center justify-start gap-6">
            <div className="">
              <h1 className="font-bold text-[40px]">200+</h1>
              <p>International Brands</p>
            </div>
            <div className="bg-black/10 w-px h-full" />
            <div className="">
              <h1 className="font-bold text-[40px]">2,000+</h1>
              <p>High-quality Products</p>
            </div>
            <div className="bg-black/10 w-px h-full" />
            <div className="">
              <h1 className="font-bold text-[40px]">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <Image
          width={104}
          height={104}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/Blink-big.png`}
          alt="blink-blink big"
          className="absolute top-20 right-20"
        />
        <Image
          width={56}
          height={56}
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/Blink-small.png`}
          alt="blink-blink big"
          className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-20"
        />
      </section>
      <section
        id="brands"
        className="bg-black w-full h-[122px] flex items-center justify-evenly"
      >
        <div>
          <Image
            src={`${baseUrl}/brands/Versace.png`}
            alt="versace"
            width={166}
            height={33.16}
          />
        </div>
        <div>
          <Image
            src={`${baseUrl}/brands/Zara.png`}
            alt="versace"
            width={91}
            height={38}
          />
        </div>

        <div>
          <Image
            src={`${baseUrl}/brands/Gucci.png`}
            alt="versace"
            width={156}
            height={36}
          />
        </div>
        <div>
          <Image
            src={`${baseUrl}/brands/Prada.png`}
            alt="versace"
            width={194}
            height={32}
          />
        </div>
        <div>
          <Image
            src={`${baseUrl}/brands/CalvinKlein.png`}
            alt="versace"
            width={206.79}
            height={33.35}
          />
        </div>
      </section>
      <NewArrivals />
      <div className="w-[1240px] mx-auto h-px bg-black/10" />
      <div className="h-screen"></div>
    </div>
  );
}

export default Page;
