import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import ProfilePic from "./ProfilePic";
import {
  BillingIcon,
  HamburgerIcon,
  HomeIcon,
  SettingsIcon,
  UserManagementIcon,
  WebinarIcon,
} from "../icons/Icons";

const useMediaQuery= (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(()=> {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const Sidebar = () => {
  let [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]);

  if (sidebarOpen) {
    return (
      <div className="md:w-96 w-20 min-h-screen bg-white text-black dark:bg-gray-700 dark:text-white transition-all ease-in-out duration-150 shadow-2xl">
        <div
          onClick={toggleSidebar}
          className="text-center flex justify-between items-center cursor-pointer px-8 py-2 my-4 transition-all ease-in-out duration-150 rounded-xl"
        >
          <HamburgerIcon />

          <ProfilePic
            url={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className="rounded-full w-10 h-10 object-cover hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-4 p-4">
          <ListItem title={"Home"} icon={<HomeIcon />} />
          <ListItem title={"Webinars"} icon={<WebinarIcon />} />
          <ListItem title={"Billing"} icon={<BillingIcon />} />
          <ListItem title={"User Management"} icon={<UserManagementIcon />} />
          <ListItem title={"Settings"} icon={<SettingsIcon />} />
          <ListItem title={"Log Out"} icon={<WebinarIcon />} />
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={toggleSidebar}
      className="text-center flex justify-between items-center cursor-pointer p-2 m-4 transition-all ease-in-out duration-150 rounded-md absolute bg-white dark:bg-mainbg"
    >
      <HamburgerIcon />
    </div>
  );
};

export default Sidebar;
