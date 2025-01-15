import Task from "./Task";

const ScheduledTasks = () => {
    return <div className="flex flex-col mt-4 p-2 rounded-lg ">
        <Task time="10:00 AM" label="Meeting" title="Product Meeting" className={'font-mono'} />
        <Task time="10:00 AM" label="Meeting" title="My first Webinar" />
        <Task time="10:00 AM" label="Meeting" title="Important Webinar" />
        <Task time="10:00 AM" label="Meeting" title="Webinar 1" />
    </div>
}

export default ScheduledTasks;