function Task({taskData, func}) {
    
    return (
        <>
        <div className="task">
            <input onClick={ () => func(taskData.id)} className="check" type="checkbox" />
            <h3>{taskData.title}</h3>
            <div className="buttons">
                <button className="button">Focus On Now</button>
            </div>
        </div>
        
        </>
    );
}
export default Task;