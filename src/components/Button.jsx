export const Button = ({ disabled, onClick, children }) => {
  return (
    <span
      onClick={!disabled && onClick}
      className={` ${
        disabled
          ? "cursor-not-allowed bg-buttonbgdisabled text-buttoncolordisabled"
          : "cursor-pointer bg-buttonbgenabled text-buttoncolorenabled"
      } inline-flex justify-center items-center px-20 py-2 rounded w-full`}
    >
      {children}
    </span>
  );
};
