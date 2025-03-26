import { baseUrl } from "./config";
import ChevronRight from "./icons/ChevronRight";
import ModalFilter from "./ModalFilter";
import Product from "./Product";

const data = [
  {
    id: 1,
    name: "Skinny Fit Jeans",
    imageUrl: `${baseUrl}/products/image 1.jpg`,
    price: 260,
    discount: 20,
    rating: 4,
  },
  {
    id: 2,
    imageUrl: `${baseUrl}/products/image 2.jpg`,
    name: "Checkered Shirt",
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
    name: "Sleeve Striped T-Shirt",
  },
  {
    id: 4,
    imageUrl: `${baseUrl}/products/image 4.jpg`,
    name: "Courage Graphic T-Shirt",
    price: 145,
    discount: 20,
    rating: 4.5,
  },
  {
    id: 5,
    imageUrl: `${baseUrl}/products/image 5.jpg`,
    price: 80,
    name: "Loose Fit Bermuda Shorts",
    discount: null,
    rating: 3.5,
  },
  {
    id: 6,
    imageUrl: `${baseUrl}/products/image 6.jpg`,
    name: "Vertical Striped shirt",
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
    name: "Sleeve Striped T-shirt",
    imageUrl: `${baseUrl}/products/image 9.jpg`,
    price: 100,
    rating: 4,
    discount: null,
  },
];

function Products() {
  return (
    <section id="products" className="flex-1 space-y-4">
      <div className="md:flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl">Casual</h1>
          <ModalFilter />
        </div>
        <div className="flex">
          <p className="text-center">
            Showing 1-9 of 100 Products. Sort by:&nbsp;
          </p>
          <div className="font-bold flex items-center gap-2">
            Most Popular
            <ChevronRight isActive className="rotate-90" />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-8 gap-x-4 w-full">
        {data.map((pr, i) => (
          <Product product={pr} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Products;
