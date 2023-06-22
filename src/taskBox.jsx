import Task from './task.jsx'

function TaskBox({tasks, runc, focus0}) {

    function collector(id) {
        runc(id)
    }
    function focus1(id) {
        focus0(id)
    }

    return (
        <>
        <div className="task-box">
            <h1>Tasks</h1>
            <div className="tasks">
                {tasks.map((task) => {
                    return <Task key={task.id} taskData={task} func={collector} focus2={focus1}></Task>
                })}
            </div>
        </div>
        </>
    );

}

export default TaskBox;