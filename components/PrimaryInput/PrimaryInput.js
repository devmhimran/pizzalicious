const PrimaryInput = ({ className, onBlur, ...props }) => {
  return (
    <input
      className={
        `border rounded-lg p-3 w-full outline-none focus:border-brandColor01` +
        className
      }
      {...props}
      onBlur={onBlur}
    />
  );
};

export default PrimaryInput;
