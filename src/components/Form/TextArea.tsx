import { FunctionComponent } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: FunctionComponent<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={`bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3 h-24`}
    />
  );
};
