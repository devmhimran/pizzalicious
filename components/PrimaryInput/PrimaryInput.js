const PrimaryInput = ({
  className,
  type,
  name,
  value,
  onBlur,
  onChange,
  placeholder,
  defaultValue,
}) => {
  return (
    <input
      className={
        `border rounded-lg p-3 w-full outline-none focus:border-brandColor01` +
        className
      }
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      defaultValue={defaultValue}
    />
  );
};

export default PrimaryInput;
