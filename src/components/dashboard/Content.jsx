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

          <div className="flex flex-col justify-center items-start md:grid grid-cols-3 gap-4">
            <div className="flex flex-col col-span-2 border shadow-2xl rounded-lg p-4 ">
              <div className="flex justify-between font-medium rounded-lg bg-[#F3F5F7] p-2 dark:text-black cursor-pointer">
                <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  {currentDate}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OptionsComponent />
    </div>
  );
};

export default Content;
