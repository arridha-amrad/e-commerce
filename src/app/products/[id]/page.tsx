import ChevronRight from "@/icons/ChevronRight";
import ProductDetail from "@/ProductDetail";
import Tab from "@/Tab";
import YouMightAlsoLike from "@/YouMightAlsoLike";

function Page() {
  return (
    <>
      <div className="xl:max-w-7xl mx-auto bg-black/10 h-px" />
      <section
        id="breadcrumb"
        className="flex xl:max-w-7xl mx-auto xl:px-0 px-4 font-light py-6 justify-center lg:justify-start text-black/50 items-center gap-2"
      >
        <p>Home</p>
        <ChevronRight />
        <p>Shop</p>
        <ChevronRight />
        <p>Men</p>
        <ChevronRight />
        <p className="text-black">T-Shirts</p>
      </section>
      <ProductDetail />
      <Tab />
      <YouMightAlsoLike />
      <div className="xl:mb-32 mb-16"></div>
    </>
  );
}

export default Page;
