import CartItem from "@/CartItem";
import { baseUrl } from "@/config";
import ChevronRight from "@/icons/ChevronRight";
import OrderSummary from "@/OrderSummary";
import { Fragment } from "react";

const carts = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Small",
    color: "White",
    imageUrl: `${baseUrl}/carts/cart1.jpg`,
    price: 145,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    imageUrl: `${baseUrl}/carts/cart2.jpg`,
    price: 180,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    imageUrl: `${baseUrl}/carts/cart3.jpg`,
    price: 240,
  },
];

function Page() {
  return (
    <main className="xl:max-w-7xl w-full mx-auto xl:px-0 px-4">
      <div className="w-full h-px bg-[#f0f0f0] mx-auto"></div>
      <section
        id="breadcrumb"
        className="flex py-6 justify-center md:justify-start text-black/50 items-center gap-2"
      >
        <p>Home</p>
        <ChevronRight />
        <p className="text-black">Cart</p>
      </section>
      <section className="w-full">
        <h1 className="text-4xl font-bold font-header text-center md:text-start">
          Your Cart
        </h1>
        <div className="flex lg:flex-row flex-col pt-6 gap-8">
          <div className="border space-y-8 flex-2 border-black/10 p-6 rounded-3xl">
            {carts.map((cart, i) => (
              <Fragment key={cart.id}>
                <CartItem key={cart.id} item={cart} />
                {i + 1 !== carts.length && (
                  <div className="w-full h-px bg-black/10"></div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="w-full lg:max-w-md">
            <OrderSummary deliveryFee={15} discount={20} items={carts} />
          </div>
        </div>
      </section>
      <div className="xl:mb-48 mb-16"></div>
    </main>
  );
}

export default Page;
