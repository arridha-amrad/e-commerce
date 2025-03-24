import Image from "next/image";
import { baseUrl } from "./config";

function Brands() {
  return (
    <section
      id="brands"
      className="bg-black w-full gap-4 xl:px-0 px-4 h-[122px] flex items-center justify-evenly"
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
  );
}

export default Brands;
