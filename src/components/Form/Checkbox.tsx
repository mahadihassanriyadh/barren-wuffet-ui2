import React from "react";

export default function Checkbox(props: {
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
}) {
  const { isChecked, setIsChecked } = props;

  return (
    <div>
      <input
        type="checkbox"
        className="rounded text-pink-500"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
    </div>
  );
}
