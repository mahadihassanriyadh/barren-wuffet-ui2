import { Tab } from "@headlessui/react";
import { FunctionComponent, ReactElement } from "react";

type TabOption = {
  label: string;
  description?: string;
  content: ReactElement;
};

const Tabs: FunctionComponent<{
  options: TabOption[];
}> = (props) => {
  return (
    <Tab.Group>
      <Tab.List>
        {props.options.map((option) => (
          <Tab className="ui-selected:bg-blue-500 ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
            {option.label}
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

export default Tabs;
