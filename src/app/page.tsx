import Banner from "@/Banner";
import Brands from "@/Braands";
import DressedStyles from "@/DressedStyles";
import NewArrivals from "@/NewArrivals";
import Testimony from "@/Testimony";
import TopSelling from "@/TopSelling";

function Page() {
  return (
    <div className="w-full">
      <Banner />
      <Brands />
      <NewArrivals />
      <div className="max-w-7xl mx-auto h-px bg-black/10" />
      <TopSelling />
      <DressedStyles />
      <Testimony />
    </div>
  );
}

export default Page;
