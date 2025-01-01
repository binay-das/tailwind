import { useState } from "react";

const Screen1 = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center text-center">
      <h1 className="text-webinar mt-32 text-6xl font-semibold">
        Webinar
        <span>.gg</span>
      </h1>
      <h1 className="mt-20 text-4xl font-medium">Verify your age</h1>
      <p className="mt-12 mb-4 text-xs opacity-50">
        Please confirm your birth year. This data will not be stored.
      </p>

      <div className="flex flex-col items-center gap-4 sm:w-96 w-full">
        <input placeholder={"Enter your age here"} type={"date"} />

        <button>Continue</button>
      </div>
    </div>
  );
};

export default Screen1;
