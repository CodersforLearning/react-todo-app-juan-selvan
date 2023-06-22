import Task from './task.jsx'

function TaskBox({tasks, runc}) {

    function collector(id) {
        runc(id)
    }

    return (
        <>
        <div className="task-box">
            <h1>Tasks</h1>
            <div className="tasks">
                {tasks.map((task) => {
                    return <Task key={task.id} taskData={task} func={collector}></Task>
                })}
            </div>
        </div>
        </>
    );

}

export default TaskBox;