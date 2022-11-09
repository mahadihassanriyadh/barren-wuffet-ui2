import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import debounce from "lodash.debounce";

import { FunctionComponent, useMemo, useState } from "react";
import calendarIcon from "../../img/icons/calendarYellowIcon.svg";

type InputType =
  | "number"
  | "text"
  | "password"
  | "email"
  | "date"
  | "bignumber";

interface InputPropsTemplate<T>
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  onChange: (val: T) => void;
  value?: T;
  type?: InputType;
  label?: string;
  icon?: string;
}

interface TextInputProps extends InputPropsTemplate<string> {
  type: "text" | "password" | "email";
}

interface NumberInputProps extends InputPropsTemplate<number> {
  type: "number";
}

interface BigNumberInputProps extends InputPropsTemplate<BigNumber> {
  type: "bignumber";
  decimals: number;
}

interface DateInputProps extends InputPropsTemplate<Date> {
  type: "date";
}

type InputProps =
  | DateInputProps
  | TextInputProps
  | NumberInputProps
  | BigNumberInputProps;

export const Input: FunctionComponent<InputProps> = (props) => {
  const { id, name } = props || {};
  const icon = props.icon || (props.type === "date" ? calendarIcon : "");

  return (
    <div className="w-full space-y-1">
      <label className="text-sm" htmlFor={id}>
        {name}
      </label>
      <div className="relative">
        {icon && (
          <img
            className="absolute right-4 top-4 pointer-events-none"
            src={icon}
            alt={name}
          />
        )}
        {props.type === "date" && <DateInput {...props} />}
        {props.type === "bignumber" && <BigNumberInput {...props} />}
        {props.type === "number" && <NumberInput {...props} />}
        {["text", "password", "email", undefined].includes(props.type) && (
          <DefaultInput {...props} />
        )}
      </div>
    </div>
  );
};

const DefaultInput: FunctionComponent<InputPropsTemplate<any>> = (props) => {
  const { onChange, value: valueProp } = props || {};
  const [value, setValue] = useState<any>(undefined); // temp value

  const debouncedOnChange = useMemo(
    () =>
      debounce((value: any) => {
        // unset the temp value
        setValue(undefined);
        // use the props value instead
        onChange(value);
      }, 500),
    [onChange]
  );
  const _onChange = (ev: any) => {
    const val = ev.target.value;
    setValue(val);
    debouncedOnChange(val);
  };

  return (
    <input
      {...props}
      value={value ?? valueProp}
      onChange={_onChange}
      className={`bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3`}
    />
  );
};

const NumberInput: FunctionComponent<NumberInputProps> = (props) => {
  return (
    <DefaultInput
      {...props}
      value={props.value?.toString()}
      onChange={(value) => props.onChange(parseFloat(value))}
    />
  );
};

const BigNumberInput: FunctionComponent<BigNumberInputProps> = (props) => {
  return (
    <DefaultInput
      {...props}
      type="text"
      value={props.value ? formatUnits(props.value, props.decimals) : ""}
      onChange={(value) => props.onChange(parseUnits(value, props.decimals))}
    />
  );
};

const DateInput: FunctionComponent<DateInputProps> = (props) => {
  const formatDate = (dt: Date) =>
    isNaN(dt as unknown as number) ? "" : dt?.toISOString()?.split("T")[0];
  return (
    <DefaultInput
      {...props}
      value={props.value ? formatDate(props.value) : props.placeholder}
      onChange={(value) => {
        props.onChange(new Date(value));
      }}
    />
  );
};
