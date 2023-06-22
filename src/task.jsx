function Task({taskData, func, focus2}) {
    
    return (
        <>
        <div className="task">
            <input onClick={ () => func(taskData.id)} className="check" type="checkbox" />
            <h3>{taskData.title}</h3>
            {!taskData.atHand && (<div className="buttons">
                <button onClick={ () => focus2(taskData.id)} className="button">Focus On Now</button>
            </div>) }
            
        </div>
        
        </>
    );
}
export default Task;