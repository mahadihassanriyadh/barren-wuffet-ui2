import { Tab } from "@headlessui/react";
import { FunctionComponent, ReactElement } from "react";
import { Fragment } from "react";
type TabOption = {
  label: string;
  description?: string;
  content: ReactElement;
};

const TabsMain: FunctionComponent<{
  options: TabOption[];
}> = (props) => {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-around h-[47px] select-none text-[12px]">
        {props.options.map((option) => (
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center justify-center px-[15px] rounded-t-[12px] border-x-[1px] border-t-[1px] border-bcolor ${
                  selected ? `text-otext bg-bcolor` : `text-white`
                }`}
              >
                {option.label}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {props.options.map((option) => (
          <Tab.Panel>{option.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabsMain;
