import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils";

export default function Screen2() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setEmail(e.target.value);
    setIsValid(isValidEmail(email));
  };

  const onClick = () => {
    if (isValid) {
      navigate("/otp");
    }
  };

  return (
    <div className="bg-mainbg min-h-screen flex flex-col items-center text-center">
      <h1 className="text-webinar mt-32 text-6xl font-semibold">
        Webinar
        <span className="text-maintext">.gg</span>
      </h1>
      <h1 className="text-maintext m-20 text-4xl font-medium">Let's get started</h1>

      <div className="flex flex-col items-center gap-4 sm:w-96 w-full">
        <Input placeholder={"Email Id"} type={"email"} onChange={onChange} />

        <Button disabled={!email || !isValid} onClick={onClick}>
          Continue
        </Button>
      </div>
    </div>
  );
}
