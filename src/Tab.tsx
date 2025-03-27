"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import StarRating from "./StarRating";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

function MyTab() {
  return (
    <TabGroup className="xl:max-w-7xl w-full mx-auto">
      <TabList className="flex w-full h-12 items-center border-b border-b-[#f0f0f0]">
        {tabs.map((t, i) => (
          <Tab key={i} as={Fragment}>
            {({ selected }) => (
              <button className="flex-1 relative cursor-pointer outline-0 h-full flex items-center justify-center">
                {t}
                {selected && (
                  <div className="absolute bottom-0 inset-x-0 h-0.5 w-full bg-black" />
                )}
              </button>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <ProductDetails />
        </TabPanel>
        <TabPanel>
          <Reviews />
        </TabPanel>
        <TabPanel>
          <FAQS />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

export default MyTab;

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you will receive a tracking number via email or SMS. You can use this number to track your package on the courier's website.",
  },
  {
    question: " What is your return and refund policy?",
    answer:
      "We accept returns and refunds for defective or incorrect items within 7 days of receiving your order. Please provide an unboxing video and photos as proof, and contact our customer service for assistance.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Delivery times depend on your location. Domestic shipping: 2-5 business days, International shipping: 7-14 business days Delays may occur due to public holidays or high order volumes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Credit/Debit Cards (Visa, MasterCard), PayPal, Bank Transfer and Digital Wallets (GPay, Apple Pay, etc.)",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "Orders can only be modified or canceled within 1 hour after purchase. Once processed, we cannot make changes. Please double-check your order details before checkout.",
  },
];

const FAQS = () => {
  return (
    <div className="px-4">
      <div className="w-full">
        <div className="py-6">
          <h1 className="font-bold text-2xl">FAQs</h1>
        </div>
        <div className="mx-auto w-full border border-black/10 divide-y divide-black/10 rounded-xl">
          {faqs.map((faq, i) => (
            <Disclosure
              key={i}
              as="div"
              className="p-6 transition-all ease-in duration-200"
              defaultOpen={false}
            >
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium">{faq.question}</span>
                <svg
                  className="group-data-[open]:rotate-180"
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z"
                    fill="black"
                  />
                </svg>
              </DisclosureButton>
              <DisclosurePanel
                transition
                className="mt-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
              >
                {faq.answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <div className="px-4 py-6">
      <h1 className="font-bold text-2xl">One Life Graphic Tshirt</h1>
      <p className="leading-relaxed pt-4">
        <span className="font-medium">Material:</span> Cotton Combed 30s Made
        from 20s cotton or heavy cotton, which has a thicker and rougher fabric
        texture, making the heavy cotton series more durable, resistant to
        shrinkage, and less prone to fading. Fabric: Cotton Combed 30s Size
        Chart: Please refer to the image slides; size tolerance is 1-3 cm.
      </p>
      <h2 className="mt-4 font-medium pb-3">Additional Information</h2>
      <ul className="list-disc pl-5">
        <li className="list-item">
          The male model in the sample is approximately 167 cm tall and weighs
          around 67 kg, wearing a Size L.
        </li>
        <li>
          We accept refunds/returns if the product is incorrect or has
          manufacturing defects, provided that a detailed unboxing video is
          included.
        </li>
      </ul>
      <h2 className="mt-4 font-medium pb-3">Reminder</h2>
      <ul className="list-disc pl-5">
        <li className="list-item">
          Ensure you have selected the correct size before checkout. Size
          details can be found in the product&apos;s size chart slide.
        </li>
        <li>
          Record a video when opening the package and take a photo of the
          receipt and buyer&apos;s label for validation.
        </li>
        <li>
          If any of these requirements are missing or incomplete, complaints
          will not be processed or considered valid.
        </li>
        <li>
          Returns are only accepted for cases such as receiving the wrong
          product or items with defects caused by manufacturing.
        </li>
      </ul>
    </div>
  );
};

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 4.5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt",
    date: new Date(),
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: new Date(),
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 3.5,
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: new Date(),
  },
  {
    id: 4,
    name: "Price K.",
    rating: 4.5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt",
    date: new Date(),
  },
  {
    id: 5,
    name: "James Mc A.",
    rating: 4,
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: new Date(),
  },
  {
    id: 6,
    name: "John D.",
    rating: 3.5,
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: new Date(),
  },
];

const Reviews = () => {
  return (
    <div className="px-4">
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 py-6 items-center justify-between">
        <div className="flex items-center justify-center gap-3">
          <h1 className="font-bold text-2xl">All Reviews</h1>
          <p className="leading-0">(451)</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="size-12 bg-[#f0f0f0] rounded-full flex items-center justify-center">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.125 9.625V18.25C12.125 18.5484 12.0065 18.8345 11.7955 19.0455C11.5845 19.2565 11.2984 19.375 11 19.375C10.7016 19.375 10.4155 19.2565 10.2045 19.0455C9.99353 18.8345 9.875 18.5484 9.875 18.25V9.625C9.875 9.32663 9.99353 9.04048 10.2045 8.8295C10.4155 8.61853 10.7016 8.5 11 8.5C11.2984 8.5 11.5845 8.61853 11.7955 8.8295C12.0065 9.04048 12.125 9.32663 12.125 9.625ZM17.75 16C17.4516 16 17.1655 16.1185 16.9545 16.3295C16.7435 16.5405 16.625 16.8266 16.625 17.125V18.25C16.625 18.5484 16.7435 18.8345 16.9545 19.0455C17.1655 19.2565 17.4516 19.375 17.75 19.375C18.0484 19.375 18.3345 19.2565 18.5455 19.0455C18.7565 18.8345 18.875 18.5484 18.875 18.25V17.125C18.875 16.8266 18.7565 16.5405 18.5455 16.3295C18.3345 16.1185 18.0484 16 17.75 16ZM20 12.25H18.875V1.75C18.875 1.45163 18.7565 1.16548 18.5455 0.954505C18.3345 0.743526 18.0484 0.625 17.75 0.625C17.4516 0.625 17.1655 0.743526 16.9545 0.954505C16.7435 1.16548 16.625 1.45163 16.625 1.75V12.25H15.5C15.2016 12.25 14.9155 12.3685 14.7045 12.5795C14.4935 12.7905 14.375 13.0766 14.375 13.375C14.375 13.6734 14.4935 13.9595 14.7045 14.1705C14.9155 14.3815 15.2016 14.5 15.5 14.5H20C20.2984 14.5 20.5845 14.3815 20.7955 14.1705C21.0065 13.9595 21.125 13.6734 21.125 13.375C21.125 13.0766 21.0065 12.7905 20.7955 12.5795C20.5845 12.3685 20.2984 12.25 20 12.25ZM4.25 13C3.95163 13 3.66548 13.1185 3.4545 13.3295C3.24353 13.5405 3.125 13.8266 3.125 14.125V18.25C3.125 18.5484 3.24353 18.8345 3.4545 19.0455C3.66548 19.2565 3.95163 19.375 4.25 19.375C4.54837 19.375 4.83452 19.2565 5.0455 19.0455C5.25647 18.8345 5.375 18.5484 5.375 18.25V14.125C5.375 13.8266 5.25647 13.5405 5.0455 13.3295C4.83452 13.1185 4.54837 13 4.25 13ZM6.5 9.25H5.375V1.75C5.375 1.45163 5.25647 1.16548 5.0455 0.954505C4.83452 0.743526 4.54837 0.625 4.25 0.625C3.95163 0.625 3.66548 0.743526 3.4545 0.954505C3.24353 1.16548 3.125 1.45163 3.125 1.75V9.25H2C1.70163 9.25 1.41548 9.36853 1.2045 9.5795C0.993526 9.79048 0.875 10.0766 0.875 10.375C0.875 10.6734 0.993526 10.9595 1.2045 11.1705C1.41548 11.3815 1.70163 11.5 2 11.5H6.5C6.79837 11.5 7.08452 11.3815 7.2955 11.1705C7.50647 10.9595 7.625 10.6734 7.625 10.375C7.625 10.0766 7.50647 9.79048 7.2955 9.5795C7.08452 9.36853 6.79837 9.25 6.5 9.25ZM13.25 4.75H12.125V1.75C12.125 1.45163 12.0065 1.16548 11.7955 0.954505C11.5845 0.743526 11.2984 0.625 11 0.625C10.7016 0.625 10.4155 0.743526 10.2045 0.954505C9.99353 1.16548 9.875 1.45163 9.875 1.75V4.75H8.75C8.45163 4.75 8.16548 4.86853 7.9545 5.0795C7.74353 5.29048 7.625 5.57663 7.625 5.875C7.625 6.17337 7.74353 6.45952 7.9545 6.6705C8.16548 6.88147 8.45163 7 8.75 7H13.25C13.5484 7 13.8345 6.88147 14.0455 6.6705C14.2565 6.45952 14.375 6.17337 14.375 5.875C14.375 5.57663 14.2565 5.29048 14.0455 5.0795C13.8345 4.86853 13.5484 4.75 13.25 4.75Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="flex h-12 px-4 bg-[#f0f0f0] items-center justify-center gap-3 rounded-full">
            Latest
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5306 1.53061L6.5306 6.53061C6.46092 6.60053 6.37813 6.65601 6.28696 6.69386C6.1958 6.73172 6.09806 6.7512 5.99935 6.7512C5.90064 6.7512 5.8029 6.73172 5.71173 6.69386C5.62057 6.65601 5.53778 6.60053 5.4681 6.53061L0.468098 1.53061C0.327202 1.38972 0.248047 1.19862 0.248047 0.999362C0.248047 0.800105 0.327202 0.609009 0.468098 0.468112C0.608994 0.327216 0.800091 0.248062 0.999348 0.248062C1.19861 0.248062 1.3897 0.327216 1.5306 0.468112L5.99997 4.93749L10.4693 0.467488C10.6102 0.326592 10.8013 0.247437 11.0006 0.247437C11.1999 0.247437 11.391 0.326592 11.5318 0.467488C11.6727 0.608384 11.7519 0.79948 11.7519 0.998738C11.7519 1.198 11.6727 1.38909 11.5318 1.52999L11.5306 1.53061Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="h-12 bg-black rounded-full text-white px-4">
            Write Review
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="w-full space-y-3 border rounded-3xl border-black/10 xl:p-8 p-4"
          >
            <div className="flex items-center justify-between">
              <StarRating rating={review.rating} />
              <button className="cursor-pointer">
                <svg
                  width="22"
                  height="6"
                  viewBox="0 0 22 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.625 3C13.625 3.51918 13.471 4.02669 13.1826 4.45837C12.8942 4.89005 12.4842 5.2265 12.0045 5.42518C11.5249 5.62386 10.9971 5.67585 10.4879 5.57456C9.97869 5.47328 9.51096 5.22327 9.14385 4.85616C8.77673 4.48904 8.52673 4.02131 8.42544 3.51211C8.32415 3.00291 8.37614 2.47511 8.57482 1.99546C8.7735 1.5158 9.10995 1.10583 9.54163 0.817392C9.97331 0.528953 10.4808 0.375 11 0.375C11.6962 0.375 12.3639 0.651562 12.8562 1.14384C13.3484 1.63613 13.625 2.30381 13.625 3ZM3.5 0.375C2.98083 0.375 2.47331 0.528953 2.04163 0.817392C1.60995 1.10583 1.2735 1.5158 1.07482 1.99546C0.876137 2.47511 0.824154 3.00291 0.92544 3.51211C1.02673 4.02131 1.27673 4.48904 1.64385 4.85616C2.01096 5.22327 2.47869 5.47328 2.98789 5.57456C3.49709 5.67585 4.02489 5.62386 4.50455 5.42518C4.9842 5.2265 5.39417 4.89005 5.68261 4.45837C5.97105 4.02669 6.125 3.51918 6.125 3C6.125 2.30381 5.84844 1.63613 5.35616 1.14384C4.86387 0.651562 4.19619 0.375 3.5 0.375ZM18.5 0.375C17.9808 0.375 17.4733 0.528953 17.0416 0.817392C16.61 1.10583 16.2735 1.5158 16.0748 1.99546C15.8761 2.47511 15.8242 3.00291 15.9254 3.51211C16.0267 4.02131 16.2767 4.48904 16.6438 4.85616C17.011 5.22327 17.4787 5.47328 17.9879 5.57456C18.4971 5.67585 19.0249 5.62386 19.5045 5.42518C19.9842 5.2265 20.3942 4.89005 20.6826 4.45837C20.971 4.02669 21.125 3.51918 21.125 3C21.125 2.65528 21.0571 2.31394 20.9252 1.99546C20.7933 1.67698 20.5999 1.3876 20.3562 1.14384C20.1124 0.900091 19.823 0.706735 19.5045 0.574816C19.1861 0.442897 18.8447 0.375 18.5 0.375Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold">{review.name}</h1>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0.828979C8.07164 0.828979 6.18657 1.40081 4.58319 2.47215C2.97982 3.54349 1.73013 5.06624 0.992179 6.84782C0.254225 8.6294 0.061142 10.5898 0.437348 12.4811C0.813554 14.3724 1.74215 16.1097 3.10571 17.4733C4.46928 18.8368 6.20656 19.7654 8.09787 20.1416C9.98919 20.5178 11.9496 20.3248 13.7312 19.5868C15.5127 18.8489 17.0355 17.5992 18.1068 15.9958C19.1782 14.3924 19.75 12.5073 19.75 10.579C19.7473 7.99396 18.7192 5.51559 16.8913 3.6877C15.0634 1.85982 12.585 0.831709 10 0.828979ZM14.2806 8.8596L9.03063 14.1096C8.96097 14.1793 8.87826 14.2347 8.78721 14.2724C8.69616 14.3101 8.59857 14.3296 8.5 14.3296C8.40144 14.3296 8.30385 14.3101 8.2128 14.2724C8.12175 14.2347 8.03903 14.1793 7.96938 14.1096L5.71938 11.8596C5.57865 11.7189 5.49959 11.528 5.49959 11.329C5.49959 11.13 5.57865 10.9391 5.71938 10.7984C5.86011 10.6576 6.05098 10.5786 6.25 10.5786C6.44903 10.5786 6.6399 10.6576 6.78063 10.7984L8.5 12.5187L13.2194 7.79835C13.2891 7.72867 13.3718 7.6734 13.4628 7.63568C13.5539 7.59797 13.6515 7.57856 13.75 7.57856C13.8486 7.57856 13.9461 7.59797 14.0372 7.63568C14.1282 7.6734 14.2109 7.72867 14.2806 7.79835C14.3503 7.86804 14.4056 7.95076 14.4433 8.04181C14.481 8.13285 14.5004 8.23043 14.5004 8.32898C14.5004 8.42753 14.481 8.52511 14.4433 8.61615C14.4056 8.7072 14.3503 8.78992 14.2806 8.8596Z"
                  fill="#01AB31"
                />
              </svg>
            </div>
            <p className="text-black/60">&quot;{review.comment}&quot;</p>
            <p className="font-medium">
              Posted on &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(review.date)}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 mx-auto w-max">
        <button className="h-13 w-[230px] font-medium rounded-full border border-black/10">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};
