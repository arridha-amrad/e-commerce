import { baseUrl } from "./config";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "T-shirt with tape details",
    image: `${baseUrl}/new-arrivals/NewArrivals1.png`,
    rating: 4.5,
    price: 120,
    discount: null,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: `${baseUrl}/new-arrivals/NewArrivals2.png`,
    rating: 3.5,
    price: 260,
    discount: 20,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: `${baseUrl}/new-arrivals/NewArrivals3.png`,
    rating: 4.5,
    price: 180,
    discount: null,
  },
  {
    id: 4,
    name: "Sleeve Striped T-Shirt",
    image: `${baseUrl}/new-arrivals/NewArrivals4.png`,
    rating: 4,
    price: 160,
    discount: 30,
  },
];

function NewArrivals() {
  const Star = `${baseUrl}/Star.png`;
  const HalfStar = `${baseUrl}/StarHalf.png`;
  return (
    <section className="max-w-[1240px] mx-auto py-16" id="new_arrivals">
      <div className="mb-16">
        <h1 className="font-header text-5xl text-center">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map(({ discount, id, image, name, price, rating }) => {
          const stars: string[] = [];
          for (let i = rating; i > 0; i--) {
            if (i - 1 >= 0) {
              stars.push("full");
            } else {
              stars.push("half");
            }
          }
          return (
            <div key={id} className="relative overflow-hidden space-y-2">
              <div>
                <Image
                  src={image}
                  alt="new arrivals"
                  width={300}
                  height={300}
                  className="rounded-[20px] aspect-square"
                />
              </div>
              <h1 className="font-bold text-[20px]">{name}</h1>
              <div className="flex gap-1 items-center">
                {stars.map((v, i) => (
                  <div key={i}>
                    {v === "full" ? (
                      <Image
                        src={Star}
                        alt="full-star"
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src={HalfStar}
                        alt="half-star"
                        width={8.8}
                        height={18}
                      />
                    )}
                  </div>
                ))}
                <span className="pl-2">
                  {rating}/<span className="text-black/50">5</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {discount && (
                  <h2 className="font-bold text-2xl">
                    ${price - (price * discount) / 100}
                  </h2>
                )}
                <h2
                  className={`font-bold text-2xl ${
                    discount ? "opacity-50" : "opacity-100"
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
        })}
      </div>
      <div className="mt-16 mx-auto w-max ">
        <button className="w-[218px] h-[52px] cursor-pointer font-medium rounded-full border border-black/10 outline-0">
          View all
        </button>
      </div>
    </section>
  );
}

export default NewArrivals;
