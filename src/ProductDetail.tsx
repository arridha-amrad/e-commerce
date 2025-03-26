"use client";

import { useState } from "react";
import ColorOptions from "./ColorOptions";
import { baseUrl } from "./config";
import SizeOptions from "./SizeOptions";
import StarRating from "./StarRating";
import Image from "next/image";
import { cn } from "./utils";

const data = {
  id: 1,
  name: "One Life Graphic Tshirt",
  rating: 4.5,
  discount: 40,
  price: 260,
  description:
    "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  images: [
    `${baseUrl}/product-details/image 1.jpg`,
    `${baseUrl}/product-details/image 5.jpg`,
    `${baseUrl}/product-details/image 6.jpg`,
  ],
};

function ProductDetail() {
  const [showImage, setShowImage] = useState(data.images[0]);
  return (
    <section
      id="product-detail"
      className="lg:flex block items-start justify-center lg:justify-start px-4 xl:px-0 gap-8 w-full lg:min-h-[530px] xl:max-w-7xl mb-16 mx-auto"
    >
      <div className="lg:flex hidden flex-col gap-2 h-full">
        {data.images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "aspect-square bg-[#f0f0f0] overflow-hidden rounded-xl",
              img === showImage && "ring-2 ring-black/40"
            )}
            onClick={() => {
              setShowImage(img);
            }}
          >
            <Image
              className="aspect-square object-cover"
              src={img}
              alt={img}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="w-[444px] lg:block flex justify-self-center lg:shrink-0 h-full rounded-3xl overflow-hidden">
        <div className="w-full h-[530px] overflow-hidden">
          <Image
            src={showImage}
            alt="details"
            width={444}
            height={530}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="lg:hidden flex gap-2 h-max w-full justify-center my-4">
        {data.images.map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-[#f0f0f0] overflow-hidden rounded-xl"
            onClick={() => {
              setShowImage(img);
            }}
          >
            <Image
              className="aspect-square object-cover"
              src={img}
              alt={img}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <Description />
    </section>
  );
}

export default ProductDetail;

const Description = () => (
  <div className="flex-1 flex-grow min-h-full max-w-lg lg:max-w-3xl gap-4 flex justify-self-center flex-col justify-between">
    <h1
      title={data.name}
      className="font-header leading-12 font-bold line-clamp-2 text-[40px]"
    >
      {data.name}
    </h1>
    <div className="flex items-center gap-3">
      <StarRating rating={data.rating} />
      <p>
        {data.rating}/<span className="text-black/50">5</span>
      </p>
    </div>
    <div className="flex items-center gap-4">
      <h1 className="font-bold text-3xl">
        ${data.price - (data.price * data.discount) / 100}
      </h1>
      <h1 className="font-bold text-3xl text-black/50">${data.price}</h1>
      <div className="w-[72px] h-[34px] rounded-full bg-[#ff3333]/10 flex items-center justify-center font-medium text-red-500">
        -{data.discount}%
      </div>
    </div>
    <p className="font-light">{data.description}</p>
    <div className="w-full h-px bg-black/10" />
    <h1 className="font-light">Select Colors</h1>
    <ColorOptions />
    <div className="w-full h-px bg-black/10" />
    <h1 className="font-light">Choose Size</h1>
    <SizeOptions />
    <div className="w-full h-px bg-black/10" />
    <div className="flex items-center gap-4">
      <div className="flex-1 flex h-13 bg-[#f0f0f0] text-black rounded-full">
        <button className="size-13 pl-1 flex items-center justify-center">
          <svg
            width="20"
            height="4"
            viewBox="0 0 20 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="font-medium">1</h1>
        </div>
        <button className="flex pr-1 items-center justify-center size-13">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <button className="flex-2 h-13 bg-black text-white rounded-full">
        Add To Cart
      </button>
    </div>
  </div>
);
