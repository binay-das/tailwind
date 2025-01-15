import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../Components/Input";
import { Button } from "../components/Button";
import { calculateAge, checkAdult } from "../utils";

const Screen1 = () => {
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleDobChange = (e) => {
    setDob(e.target.value);

    if (dob >= 18) {
      navigate("/email");
    }
  };

  const onClick = () => {
    const age = calculateAge(dob);

    const isAdult = checkAdult(age);

    if (isAdult) {
      navigate("/otp");
    } else {
      alert("You are not old enough to use this site.");
    }

    setDob("");
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
        <Input
          placeholder={"Enter your age here"}
          type={"date"}
          value={dob}
          onChange={handleDobChange}
        />

        <Button disabled={!dob} onClick={onClick}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Screen1;
