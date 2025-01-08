export const Input = ({ type, placeholder, onChange }) => {
  return (
    <span className="bg-inputboxbg w-full rounded">
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="bg-inherit w-full h-full p-2 rounded focus:outline-none text-inputbox cursor-pointer"
      />
    </span>
  );
};
