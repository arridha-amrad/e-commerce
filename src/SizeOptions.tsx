"use client";

import { Field, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

const sizes = ["Small", "Medium", "Large", "X-Large"];

export default function SizeOptions() {
  const [selected, setSelected] = useState(sizes[2]);

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
      className="flex items-center gap-3"
    >
      {sizes.map((size) => (
        <Field key={size} className="flex items-center gap-2">
          <Radio
            value={size}
            className="group cursor-pointer flex items-center justify-center rounded-full appearance-none"
          >
            <div
              className="w-full group-data-[checked]:font-medium flex font-light items-center justify-center h-full rounded-full px-8 py-3"
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
  );
}
