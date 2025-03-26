"use client";

import ChevronRight from "@/icons/ChevronRight";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function DressedStyleFilter() {
  return (
    <section className="space-y-4">
      <Disclosure defaultOpen>
        <DisclosureButton
          as="div"
          className="flex group items-center justify-between"
        >
          {({ open }) => (
            <>
              <h1 className="font-bold text-xl">Dressed Style</h1>
              <ChevronRight
                isActive={open}
                className="group-data-[open]:-rotate-90"
              />
            </>
          )}
        </DisclosureButton>
        <div className="overflow-hidden">
          <DisclosurePanel
            transition
            className="origin-top space-y-4 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <div className="flex justify-between items-center">
              <h1>T-Shirts</h1>
              <ChevronRight />
            </div>
            <div className="flex justify-between items-center">
              <h1>Shirts</h1>
              <ChevronRight />
            </div>
            <div className="flex justify-between items-center">
              <h1>Shorts</h1>
              <ChevronRight />
            </div>
            <div className="flex justify-between items-center">
              <h1>Hoodie</h1>
              <ChevronRight />
            </div>
            <div className="flex justify-between items-center">
              <h1>Jeans</h1>
              <ChevronRight />
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </section>
  );
}

export default DressedStyleFilter;
