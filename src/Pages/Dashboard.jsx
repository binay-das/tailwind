import Content from "../components/dashboard/Content";
import Sidebar from "../components/dashboard/Sidebar";

const Dashboard = () => {
  const toggleTheme = () => {
    document.querySelector("html").classList.toggle("dark");
  };
  return (
    <div className="flex w-full h-screen ">
      <h1
        className="border p-2 text-gray-50 inline rounded-lg m-1 cursor-pointer absolute right-0"
        onClick={toggleTheme}
      >
        Toggle Theme
      </h1>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
