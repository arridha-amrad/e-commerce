"use client";

import { Fragment, useEffect } from "react";
import { Item, useCartStore } from "./store";
import CartItem from "@/CartItem";

type Props = {
  items: Item[];
};

function Carts({ items }: Props) {
  const setItems = useCartStore((store) => store.setItems);
  const cartItems = useCartStore((store) => store.items);

  useEffect(() => {
    setItems(items);
  }, []);

  return (
    <div className="border space-y-8 flex-2 border-black/10 p-6 rounded-3xl">
      {cartItems.map((cart, i) => (
        <Fragment key={cart.id}>
          <CartItem key={cart.id} item={cart} />
          {i + 1 !== cartItems.length && (
            <div className="w-full h-px bg-black/10"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Carts;
