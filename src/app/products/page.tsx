"use client";

import ChevronRight from "@/icons/ChevronRight";
import ProductFilter from "@/ProductFilter";
import Products from "@/Products";
import ProductPaginatedButton from "@/ProductsPaginatedButton";

function Page() {
  return (
    <main className="xl:max-w-7xl w-full mx-auto xl:px-0 px-4">
      <div className="xl:max-w-7xl w-full mx-auto bg-black/10 h-px" />
      <section
        id="breadcrumb"
        className="flex py-6 justify-center lg:justify-start text-black/50 items-center gap-2"
      >
        <p>Home</p>
        <ChevronRight />
        <p>Products</p>
        <ChevronRight />
        <p className="text-black font-medium">Casual</p>
      </section>
      <div className="flex gap-4 pb-8">
        <ProductFilter />
        <div className="h-full w-full">
          <Products />
          <div className="xl:max-w-7xl w-full mx-auto my-8 h-px bg-black/10"></div>
          <ProductPaginatedButton />
        </div>
      </div>
    </main>
  );
}

export default Page;
