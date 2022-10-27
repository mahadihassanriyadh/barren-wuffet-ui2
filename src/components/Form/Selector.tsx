import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import dropDownArrow from "../../img/icons/dropDownArrowGray.svg";
import { t } from "@lingui/macro";

export default function Selector<
  T extends { name: string; icon?: string; id?: string }
>(props: {
  items: T[];
  selectedItem?: T;
  setSelectedItem: (value: T) => void;
  buttonLabel?: string;
}) {
  const { items, selectedItem, setSelectedItem, buttonLabel } = props;

  return (
    <div className="relative">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <div className="mt-1">
          <Listbox.Button className="w-3/5 rounded-2xl bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-100">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                {selectedItem?.icon && <img src={selectedItem?.icon} alt="" />}
                <p className="text-2xl font-bold">
                  {selectedItem?.name || buttonLabel || t`Select`}
                </p>
              </div>

              <img className="block" src={dropDownArrow} alt="" />
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-3/5 overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item) => (
                <Listbox.Option
                  key={item.id || item.name}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-5 pr-4 text-white ${
                      active ? "bg-gray-500" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <div
                      className={`truncate flex items-center text-lg space-x-3 ${
                        selected ? "font-bold" : "font-normal"
                      }`}
                    >
                      {item.icon && (
                        <img className="w-10" src={item?.icon} alt="" />
                      )}
                      <p>{item.name}</p>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
