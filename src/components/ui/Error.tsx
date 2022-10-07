import React, { ReactPropTypes } from 'react';

type Props = {
    error: string;
}
const Error = ({error}: Props) => {
    return (
        <div>
            <p className="mb-4 bg-red-500 bg-opacity-25 py-1.5 px-4 rounded-md font-medium text-gray-300">
              ❗️
              <span>{error}</span>
            </p>
        </div>
    );
};

export default Error;