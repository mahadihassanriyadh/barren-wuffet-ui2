import { Switch } from "@headlessui/react";
import React from "react";

export default function Checkbox(props: {
  isChecked: boolean;
  label: string;
  setIsChecked: (checked: boolean) => void;
}) {
  const { isChecked, label, setIsChecked } = props;

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={isChecked}
          onChange={setIsChecked}
          className={`${
            isChecked ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              isChecked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
