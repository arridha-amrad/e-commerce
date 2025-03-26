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
        className="flex py-6 justify-center md:justify-start text-black/50 items-center gap-2"
      >
        <p>Home</p>
        <ChevronRight />
        <p>Products</p>
        <ChevronRight />
        <p className="text-black font-medium">Casual</p>
      </section>
      <div className="flex gap-4 pb-8">
        <div className="max-w-[295px] md:block hidden">
          <ProductFilter />
        </div>
        <div className="h-full w-full">
          <Products />
          <div className="xl:max-w-7xl w-full mx-auto my-8 h-px bg-black/10"></div>
          <ProductPaginatedButton currentPage={5} totalPages={7} />
          <div className="xl:mb-32"></div>
        </div>
      </div>
    </main>
  );
}

export default Page;
