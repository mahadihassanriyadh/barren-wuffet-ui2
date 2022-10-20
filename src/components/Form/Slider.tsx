import React, { useState } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (val: number) => void;
}

const Slider = (props: InputProps) => {
  return (
    <div>
      <input
        {...props}
        type="range"
        min="0"
        max="100"
        value={props.value}
        onChange={(ev) => props.onChange(parseInt(ev.target.value))}
        step="5"
        className="w-full"
      />
      <span>{props.value}%</span>
    </div>
  );
};

export default Slider;
