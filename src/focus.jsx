import Task from './task.jsx'

function SuperFocus({tasks}) {

    return (
        <>
        <div className="task-box">
            <h1>Tasks</h1>
            <div className="tasks">
                <Task taskData={tasks}></Task>
            </div>
        </div>
        </>
    );

}

export default SuperFocus;