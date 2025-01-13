import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { SubOtpBox } from "../components/SubOtpBox";

export const Screen3 = () => {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [disabled, setDisabled] = useState(true);
  const inputRefs = useRef([]);

  const handleChange = (index) => (e) => {
    const value = e.target.value;
    const updatedValues = [...otpValues];
    updatedValues[index] = value;
    setOtpValues(updatedValues);

    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setDisabled(!updatedValues.every((val) => val.trim() !== ""));

    if (val && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => () => {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otp = otpValues.join("");
    alert(`OTP is ${otp}`);
  }

  return (
    <div className="bg-mainbg min-h-screen flex justify-center items-center text-center">
      <div className="max-w-[350px] flex flex-col gap-8">
        <div className="flex justify-center items-center gap-4">

          {Array.from({ length: 6 }).map((_, index) => (
            <SubOtpBox
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={handleChange(index)}
              onBackspace={handleBackspace(index)}
            />

          ))}


        </div>
        <Button disabled={disabled} onClick={handleVerify}>Verify</Button>
      </div>
    </div>
  );
};
