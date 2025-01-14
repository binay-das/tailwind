const ListItem = ({
    title,
    icon
}) => {
    return <div className="flex justify-center md:justify-between items-center w-full p-4 cursor-pointer rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 hover:-translate-y-1 transition-all ease-in-out duration-150">
        <div className="hidden md:flex">{title}</div>
        <div>{icon}</div>
    </div>
}

export default ListItem;