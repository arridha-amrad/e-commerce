import { baseUrl } from "./config";
import ChevronRight from "./icons/ChevronRight";
import Product from "./Product";

const data = [
  {
    id: 1,
    name: "SKINNY FIT JEANS",
    imageUrl: `${baseUrl}/products/image 1.jpg`,
    price: 260,
    discount: 20,
    rating: 4,
  },
  {
    id: 2,
    imageUrl: `${baseUrl}/products/image 2.jpg`,
    name: "CHECKERED SHIRT",
    price: 180,
    discount: 5,
    rating: 4.5,
  },
  {
    id: 3,
    imageUrl: `${baseUrl}/products/image 3.jpg`,
    price: 130,
    discount: 10,
    rating: 4,
    name: "SLEEVE STRIPED T-SHIRT",
  },
  {
    id: 4,
    imageUrl: `${baseUrl}/products/image 4.jpg`,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 5,
    imageUrl: `${baseUrl}/products/image 5.jpg`,
    price: 80,
    name: "LOOSE FIT BERMUDA SHORTS",
    discount: null,
    rating: 3.5,
  },
  {
    id: 6,
    imageUrl: `${baseUrl}/products/image 6.jpg`,
    name: "VERTICAL STRIPED SHIRT",
    price: 120,
    rating: 4,
    discount: 4,
  },
  {
    imageUrl: `${baseUrl}/products/image 7.jpg`,
    price: 160,
    name: "Gradient Graphic T-shirt",
    discount: null,
    rating: 4.5,
  },
  {
    imageUrl: `${baseUrl}/products/image 8.jpg`,
    name: "Polo with Tipping Details",
    price: 110,
    discount: 5,
    rating: 3.5,
  },
  {
    name: "SLEEVE STRIPED T-SHIRT",
    imageUrl: `${baseUrl}/products/image 9.jpg`,
    price: 100,
    rating: 4,
    discount: null,
  },
];

function Products() {
  return (
    <section id="products" className="flex-1 space-y-4">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="font-bold text-3xl">Casual</h1>
        <div className="flex">
          Showing 1-9 of 100 Products. Sort by:&nbsp;
          <div className="font-bold flex items-center gap-2">
            Most Popular
            <ChevronRight isActive className="rotate-90" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-x-4 w-full">
        {data.map((pr, i) => (
          <Product product={pr} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Products;
