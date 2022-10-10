import { Trans, t } from "@lingui/macro";
import { FunctionComponent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => (
  <button
    {...props}
    className="px-16 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-bold text-lg text-white block mx-auto"
  >
    <Trans>{props.label}</Trans>
  </button>
);

export default Button;
