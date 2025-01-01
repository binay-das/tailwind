import { useState } from "react";

const Screen1 = () => {
    const [dob, setDob] = useState("");

    const handleDobChange = (e) => {
        setDob(e.target.value);
    }

    return <div className="bg-blue-500 min-h-screen flex flex-col items-center text-center">
    <h1 className="text-webinar text-blue-900 mt-32 text-6xl font-semibold">
      Webinar
      <span>.gg</span>
    </h1>
    <h1 className="mt-20 text-4xl font-medium">
      Verify your age
    </h1>
    <p className="mt-12 mb-4 text-xs opacity-50">
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
}

export default Screen1;