import ChevronRight from "@/icons/ChevronRight";
import { RadioGroup, Field, Radio } from "@headlessui/react";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function SizeOptions() {
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3XL-Large",
    "4XL-Large",
  ];
  const [selected, setSelected] = useState(sizes[2]);

  return (
    <section className="space-y-4">
      <Disclosure defaultOpen>
        <DisclosureButton
          as="div"
          className="flex group items-center justify-between"
        >
          {({ open }) => (
            <>
              <h1 className="font-bold text-xl">Size</h1>
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
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <RadioGroup
              value={selected}
              onChange={setSelected}
              aria-label="Server size"
              className="flex flex-wrap items-center gap-3"
            >
              {sizes.map((size) => (
                <Field key={size} className="flex items-center gap-2">
                  <Radio
                    value={size}
                    className="group cursor-pointer flex items-center justify-center rounded-full appearance-none"
                  >
                    <div
                      className="w-full flex font-light items-center justify-center h-full rounded-full px-6 py-2"
                      style={{
                        color: selected === size ? "#f0f0f0" : "#000",
                        background: selected === size ? "#000" : "#f0f0f0",
                      }}
                    >
                      {size}
                    </div>
                  </Radio>
                </Field>
              ))}
            </RadioGroup>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </section>
  );
}
