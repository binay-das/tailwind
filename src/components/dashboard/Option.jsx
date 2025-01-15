const Option = ({
  icon,
  optionTitle
}) => {
  return <div className="flex flex-col justify-center items-center gap-2 text-center cursor-pointer">
      <div className="p-2 bg-optionsbg flex justify-center items-center rounded-lg dark:text-black">{icon}</div>
      <div className="font-semibold text-xs">{optionTitle}</div>
    </div>
};

export default Option;
