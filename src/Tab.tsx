"use client";

function Tab() {
  return (
    <section
      id="tab"
      className="flex xl:max-w-7xl h-12 mx-auto items-center  border-b border-b-[#f0f0f0]"
    >
      <div className="flex-1 relative h-full flex items-center justify-center">
        <h1>Product Details</h1>
      </div>
      <div className="flex-1 flex items-center h-full border-b-2 border-b-black justify-center">
        <h1>Rating & Reviews</h1>
      </div>
      <div className="flex-1 flex items-center h-full justify-center">
        <h1>FAQs</h1>
      </div>
    </section>
  );
}

export default Tab;
