import { useRef } from "react";
import { Button } from "../components/Button";
import { SubOtpBox } from "../components/SubOtpBox";

export const Screen3 = () => {
  const inputRefs = useRef([]);
  return (
    <div className="bg-mainbg min-h-screen flex justify-center items-center text-center">
      <div className="max-w-[350px] flex flex-col gap-8">
        <div className="flex justify-center items-center gap-4">

          {Array.from({ length: 6 }).map((_, index) => (
            <SubOtpBox
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              
            />

          ))}


        </div>
        <Button>Verify</Button>
      </div>
    </div>
  );
};
