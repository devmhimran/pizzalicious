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
  return (
    <div className="w-full">
      <label className="text-base font-semibold" for={inputId}>
        {label}
      </label>
      <input
        className={
          `border rounded-md p-3 w-full outline-none focus:border-brandColor01 mt-1` +
          className
        }
        id={inputId}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default PrimaryInput;
