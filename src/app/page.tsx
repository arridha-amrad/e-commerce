import Alert from "@/Alert";
import Banner from "@/Banner";
import Brands from "@/Braands";
import DressedStyles from "@/DressedStyles";
import Footer from "@/Footer";
import Header from "@/Header";
import NewArrivals from "@/NewArrivals";
import NewsLetter from "@/NewsLetter";
import Testimony from "@/Testimony";
import TopSelling from "@/TopSelling";

function Page() {
  return (
    <div className="w-full mx-auto">
      <Alert />
      <Header />
      <Banner />
      <Brands />
      <NewArrivals />
      <div className="max-w-7xl mx-auto h-px bg-black/10" />
      <TopSelling />
      <DressedStyles />
      <div className="relative">
        <Testimony />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
