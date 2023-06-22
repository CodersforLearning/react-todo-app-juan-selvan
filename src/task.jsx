export default function Task({taskData}) {
    console.log(taskData)
    return (
        <>
        <div className="task">
            <input type="checkbox" />
            <h3>{taskData.title}</h3>
            <div className="buttons">
                <button className="delete-button">Delete</button>
                <button className="button">Focus On Now</button>
            </div>

        </div>
        
        </>
    );
}