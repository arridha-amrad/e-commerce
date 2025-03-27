import { baseUrl } from "./config";
import Product from "./Product";

const data = [
  {
    id: 1,
    name: "T-shirt with tape details",
    imageUrl: `${baseUrl}/new-arrivals/NewArrivals1.png`,
    rating: 4.5,
    price: 120,
    discount: null,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    imageUrl: `${baseUrl}/new-arrivals/NewArrivals2.png`,
    rating: 3.5,
    price: 260,
    discount: 20,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    imageUrl: `${baseUrl}/new-arrivals/NewArrivals3.png`,
    rating: 4.5,
    price: 180,
    discount: null,
  },
  {
    id: 4,
    name: "Sleeve Striped T-Shirt",
    imageUrl: `${baseUrl}/new-arrivals/NewArrivals4.png`,
    rating: 4,
    price: 160,
    discount: 30,
  },
];

function YouMightAlsoLike() {
  return (
    <section
      className="xl:max-w-7xl px-4 mx-auto xl:py-16 py-8"
      id="new_arrivals"
    >
      <div className="mb-16">
        <h1 className="font-header text-5xl font-bold text-center">
          You Might Also Like
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {data.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default YouMightAlsoLike;
