import { baseUrl } from "./config";
import Product from "./Product";

const data = [
  {
    id: 1,
    name: "Vertical Striped Shirt",
    imageUrl: `${baseUrl}/top-selling/ts.jpg`,
    rating: 5,
    price: 232,
    discount: 20,
  },
  {
    id: 2,
    name: "Courage Graphic T-Shirt",
    imageUrl: `${baseUrl}/top-selling/ts1.jpg`,
    rating: 4,
    price: 145,
    discount: null,
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    imageUrl: `${baseUrl}/top-selling/ts2.jpg`,
    rating: 3,
    price: 80,
    discount: null,
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    imageUrl: `${baseUrl}/top-selling/ts3.jpg`,
    rating: 4.5,
    price: 210,
    discount: null,
  },
];

function TopSelling() {
  return (
    <section
      className="xl:max-w-7xl xl:px-0 px-4 mx-auto xl:py-16 py-8"
      id="new_arrivals"
    >
      <div className="mb-16">
        <h1 className="font-header text-5xl text-center">Top Selling</h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {data.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
      <div className="mt-9 mx-auto w-max ">
        <button className="w-[218px] h-[52px] cursor-pointer font-medium rounded-full border border-black/10 outline-0">
          View all
        </button>
      </div>
    </section>
  );
}

export default TopSelling;
