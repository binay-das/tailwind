import { useState } from "react";

export default function Screen2() {
  return (
    <div className="bg-blue min-h-screen flex flex-col items-center ">
      <h1 className="mt-32 text-6xl">
        Webinar
        <span>.gg</span>
      </h1>
      <h1 className="m-20 text-4xl font-medium">Let's get started</h1>

      <div className="flex flex-col items-center">
        <input placeholder={"Email Id"} type={"email"} />

        <button>Continue</button>
      </div>
    </div>
  );
}
