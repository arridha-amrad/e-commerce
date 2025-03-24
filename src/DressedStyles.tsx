import Image from "next/image";
import { baseUrl } from "./config";

function DressedStyles() {
  return (
    <section
      id="dressed_style"
      className="xl:max-w-7xl px-16 xl:h-[866px] xl:py-0 py-10 flex flex-col items-center justify-center mx-auto bg-[#f0f0f0] lg:rounded-[40px]"
    >
      <div className="mb-16">
        <h1 className="font-header text-5xl font-bold">
          BROWSE BY dress STYLE
        </h1>
      </div>
      <div className="grid xl:auto-rows-[289px] md:grid-cols-3 grid-cols-1 gap-4">
        <div className="rounded-[20px] relative overflow-hidden">
          <div className="absolute top-6 left-9">
            <h1 className="font-bold text-4xl">Casual</h1>
          </div>
          <Image
            src={`${baseUrl}/styles/image 11.jpg`}
            alt="styles"
            width={407}
            height={289}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full relative col-span-2 rounded-[20px] overflow-hidden">
          <div className="absolute top-6 left-9">
            <h1 className="font-bold text-4xl">Formal</h1>
          </div>
          <Image
            src={`${baseUrl}/styles/image 13.jpg`}
            alt="styles"
            width={684}
            height={289}
            className="object-fill w-full h-auto"
          />
        </div>
        <div className="h-full col-span-2 rounded-[20px] relative overflow-hidden">
          <div className="absolute top-6 left-9">
            <h1 className="font-bold text-4xl">Party</h1>
          </div>
          <Image
            src={`${baseUrl}/styles/image 12.jpg`}
            alt="styles"
            width={684}
            height={289}
            className="object-fill w-full h-auto"
          />
        </div>
        <div className="rounded-[20px] relative overflow-hidden">
          <div className="absolute top-6 left-9">
            <h1 className="font-bold text-4xl">Gym</h1>
          </div>
          <Image
            src={`${baseUrl}/styles/image 14.jpg`}
            alt="styles"
            width={407}
            height={289}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default DressedStyles;
