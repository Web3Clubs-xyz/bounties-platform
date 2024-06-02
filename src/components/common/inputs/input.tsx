import React from "react";

const Input = ({label,inputType}:any) => {
  return (
    <div className="col-span-full mt-3">
      <label
        htmlFor="street-address"
        className="block text-sm font-medium leading-6 text-gray-900 text-start"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name={inputType}
          id={inputType}
          autoComplete={inputType}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
