import { forwardRef } from "react";
import { Input } from "../Components/Input";

export const SubOtpBox = forwardRef(({ onChange, onBackspace }, ref) => {
  const handleKeyUp = (e) => {
    if (e.key === "Backspace" && !e.target.value) {
      onBackspace();
    }
  };
  return (
    <div className="w-[40px] h-[50px] bg-inputboxbg text-inputbox rounded-md flex justify-center items-center">
      <input
        ref={ref}
        onChange={onChange}
        onKeyUp={handleKeyUp}
        maxLength={1}
        type="text"
        className="text-center w-full h-full bg-inherit text-inherit rounded-xl outline-none"
      />
    </div>
  );
});