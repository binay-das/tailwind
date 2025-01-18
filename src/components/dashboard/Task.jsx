const Task = ({ time, label, title, className }) => {
  return (
    <div className="flex items-center p-2 ">
      <div className="flex flex-col justify-center pr-4 border-r-2 border-gray-500">
        <h1 className="font-medium text-lg">{time}</h1>
        <h1 className="opacity-50 text-xs">{time}</h1>
      </div>
      <div className="flex flex-col justify-center pl-4">
        <h1 className="flex gap-4 opacity-50 text-xs">
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </h1>
        <h1 className="font-medium text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default Task;
