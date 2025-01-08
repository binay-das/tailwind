import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Screen1 = () => {
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleDobChange = (e) => {
    setDob(e.target.value);
    
    if (dob >= 18) {
      navigate("/email");
    }
  };

  return (
    <div className="bg-mainbg min-h-screen flex flex-col items-center text-center">
      <h1 className="text-webinar mt-32 text-6xl font-semibold">
        Webinar
        <span className="text-maintext">.gg</span>
      </h1>
      <h1 className="text-maintext mt-20 text-4xl font-medium">
        Verify your age
      </h1>
      <p className="text-smallp mt-12 mb-4 text-xs opacity-50">
        Please confirm your birth year. This data will not be stored.
      </p>

      <div className="flex flex-col items-center gap-4 sm:w-96 w-full">
        <input
          placeholder={"Enter your age here"}
          type={"date"}
          value={dob}
          onChange={handleDobChange}
        />

        <button>Continue</button>
      </div>
    </div>
  );
};

export default Screen1;
