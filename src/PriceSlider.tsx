"use client";

import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 10;
const MIN = 0;
const MAX = 300;

const LabeledTwoThumbs: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([MIN, MAX]);
  return (
    <div className="flex justify-center flex-wrap">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="h-12 flex w-full"
            style={{
              ...props.style,
            }}
          >
            <div
              ref={props.ref}
              className="mt-3"
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#f0f0f0", "#000", "#f0f0f0"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            key={props.key}
            className="size-6 outline-0 rounded-full bg-black flex items-center justify-center"
            style={{
              ...props.style,
            }}
          >
            <div
              key={new Date().getTime()}
              className="absolute -bottom-5 right-0 text-black font-medium text-sm"
            >
              ${values[index]}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;
