import { Trans } from "@lingui/macro";
import { FunctionComponent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const BorderlessButton: FunctionComponent<ButtonProps> = (props) => (
  <button
    {...props}
    className="font-medium text-lg text-yellow-400 block mx-auto"
  >
    <Trans>{props.label}</Trans>
  </button>
);

export default BorderlessButton;
