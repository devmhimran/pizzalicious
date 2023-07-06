"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="w-full lg:py-0 py-1">
      <label className="text-base font-semibold" htmlFor={inputId}>
        {label}
      </label>
      <input
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
};

export default PrimaryInput;
