"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("./Input"), { ssr: false });

const PrimaryInput = ({
  className = "",
  type,
  name,
  value,
  onBlur,
  onChange,
  placeholder,
  label,
  inputId,
  defaultValue,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleBlur = (event) => {
    setInputValue(event.target.value);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  // Render the component only on the client-side
  if (typeof window !== "undefined") {
    return (
      <div className="w-full lg:py-0 py-1">
        <label className="text-base font-semibold" htmlFor={inputId}>
          {label}
        </label>
        <Input
          className={`border rounded-md p-3 w-full outline-none focus:border-brandColor01 mt-1 ${className}`}
          id={inputId}
          type={type}
          name={name}
          value={inputValue}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
    );
  }

  // Return null during server-side rendering
  return null;
};

export default PrimaryInput;
