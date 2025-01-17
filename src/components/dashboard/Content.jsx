import { useState } from "react";
import OptionsComponent from "./OptionsComponent";
import ProfilePic from "./ProfilePic";
import { useEffect } from "react";

const Content = () => {
  const [greeting, setGreeting] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateAndGreeting = () => {
      const date = new Date();

      // Format the date
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }).format(date);

      setCurrentDate(formattedDate);

      const hour = date.getHours();
      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }
    };

    updateDateAndGreeting();
  }, []);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="bg-[#11272D] h-44 w-full"></div>

      <div className="flex flex-col flex-grow md:grid grid-cols-12 gap-4 pl-10 pr-2 w-full dark:bg-[#021b33] bg-white text-black dark:text-white overflow-visible  transition-all duration-200 ease-in">
        <div className="bg-white dark:bg-gray-700 flex flex-col justify-center items-center h-96 col-span-3 shadow-2xl -translate-y-12 rounded-xl z-10 cursor-pointer">
          <ProfilePic
            className="w-[140px] h-[140px] object-cover rounded-xl mb-8"
            url={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />

          <h1 className="font-bold">Prabhleen Kaur</h1>
          <p className="mt-4 opacity-50">prabhleen@gmail.com</p>
          <p className="opacity-50">+91 XXXXXXXXXX</p>
          <p className="mt-4 opacity-50">Delhi, India</p>
        </div>
        <div className="col-span-9">
          <div className="p-4 font-bold ">
            <p className="opacity-50">{currentDate}</p>
            <h1 className=" text-2xl ">{greeting}, Prabhleen!</h1>
          </div>

        </div>
      </div>

      <OptionsComponent />
    </div>
  );
};

export default Content;
