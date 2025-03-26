"use client";

import Image from "next/image";
import StarRating from "./StarRating";
import { useRouter } from "next/navigation";

type Product = {
  imageUrl: string;
  rating: number;
  name: string;
  price: number;
  discount: number | null;
};

type Props = {
  product: Product;
};

function Product({
  product: { discount, imageUrl, name, price, rating },
}: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/products/123`)}
      className="relative w-full overflow-hidden space-y-2"
    >
      <div className="overflow-hidden w-full">
        <Image
          src={imageUrl}
          alt="new arrivals"
          width={300}
          height={300}
          className="rounded-[20px] w-full h-full object-cover aspect-square"
        />
      </div>
      <h1 className="font-bold xl:text-[20px]">{name}</h1>
      <div className="flex gap-1 items-center">
        <StarRating rating={rating} />
        <span className="pl-2">
          {rating}/<span className="text-black/50">5</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        {discount && (
          <h2 className="font-bold xl:text-2xl text-xl">
            ${price - (price * discount) / 100}
          </h2>
        )}
        <h2
          className={`font-bold xl:text-2xl text-xl ${
            discount ? "opacity-40" : "opacity-100"
          }`}
        >
          ${price}
        </h2>
        {discount && (
          <div className="bg-[#ff3333]/10 text-red-500 rounded-full font-medium text-xs flex items-center justify-center w-[58px] h-[28px]">
            -{discount}%
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
