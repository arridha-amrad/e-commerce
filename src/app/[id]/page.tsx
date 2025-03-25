import { baseUrl } from "@/config";
import StarRating from "@/StarRating";
import Image from "next/image";

function Page() {
  return (
    <>
      <div className="xl:max-w-7xl mx-auto bg-black/10 h-px" />
      <section
        id="breadcumb"
        className="flex xl:max-w-7xl mx-auto font-light py-6 text-black/50 items-center gap-2"
      >
        <p>Home</p>
        <ChevronRight />
        <p>Shop</p>
        <ChevronRight />
        <p>Men</p>
        <ChevronRight />
        <p className="text-black">T-Shirts</p>
      </section>
      <section
        id="product-detail"
        className="flex items-start gap-4 xl:max-w-7xl mb-16 mx-auto"
      >
        <div className="flex-1 flex gap-3 w-full">
          <div className="flex flex-col gap-3">
            <div className="h-[167px] rounded-3xl flex items-center justify-center aspect-square bg-[#f0f0f0]">
              <Image
                src={`${baseUrl}/product-details/image 1.jpg`}
                alt="details"
                width={444}
                height={530}
                className="object-cover w-auto h-full rounded-3xl"
              />
            </div>
            <div className="h-[167px] flex items-center justify-center rounded-3xl aspect-square bg-[#f0f0f0]">
              <Image
                src={`${baseUrl}/product-details/image 5.jpg`}
                alt="details"
                width={444}
                height={530}
                className="object-cover w-auto h-full rounded-3xl"
              />
            </div>
            <div className="h-[167px] flex items-center justify-center rounded-3xl aspect-square bg-[#f0f0f0]">
              <Image
                src={`${baseUrl}/product-details/image 6.jpg`}
                alt="details"
                width={444}
                height={530}
                className="object-cover w-auto h-full rounded-3xl"
              />
            </div>
          </div>
          <div className="flex-1 bg-[#f0f0f0] overflow-hidden rounded-3xl">
            <Image
              src={`${baseUrl}/product-details/image 1.jpg`}
              alt="details"
              width={444}
              height={530}
              className="object-cover w-auto h-full rounded-3xl"
            />
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="font-header -mt-4 font-bold text-[40px]">
            One Life Graphic Tshirt
          </h1>
          <div className="flex items-center gap-3">
            <StarRating rating={4.5} />
            <p>
              4.5/<span className="text-black/50">5</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-3xl">$260</h1>
            <h1 className="font-bold text-3xl text-black/50">$260</h1>
            <div className="w-[72px] h-[34px] rounded-full bg-[#ff3333]/10 flex items-center justify-center font-medium text-red-500">
              -40%
            </div>
          </div>
          <p className="font-light">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="w-full h-px bg-black/10" />
        </div>
      </section>
    </>
  );
}

export default Page;

const ChevronRight = () => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
      fill="black"
      fillOpacity="0.4"
    />
  </svg>
);
