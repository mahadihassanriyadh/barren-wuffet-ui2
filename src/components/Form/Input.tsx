import { FunctionComponent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
  icon?: string;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const { id, name } = props || {}; 
  return (
    <div className="relative w-full space-y-1">
      {props.icon && (
        <img
          className="absolute right-4 top-11 pointer-events-none"
          src={props.icon}
          alt={name}
        />
      )}
      <label className="text-sm" htmlFor={id}>{ name }</label>
      <input
        {...props}
        className={`bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3`}
      />
    </div>
  );
};
