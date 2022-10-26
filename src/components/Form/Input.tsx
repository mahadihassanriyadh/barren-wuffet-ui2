import { FunctionComponent } from "react";

type InputType = "number" | "text" | "password" | "email" | "date";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (val: string) => void;
  type?: InputType;
  label?: string;
  icon?: string;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { id, name } = props || {};
  return (
    <div className="w-full space-y-1">
      <label className="text-sm" htmlFor={id}>
        {name}
      </label>
      <div className="relative">
        {props.icon && (
          <img
            className="absolute right-4 top-4 pointer-events-none"
            src={props.icon}
            alt={name}
          />
        )}
        <input
          {...props}
          onChange={(ev) => props.onChange(ev.target.value)}
          className={`bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3`}
        />
      </div>
    </div>
  );
};
