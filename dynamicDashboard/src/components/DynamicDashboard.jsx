const DynamicDashboard = () => {
    const userName = "John";
    const isPremium = true;
    const message = isPremium 
        ? "Thank you for being a premium member!" 
        : "Upgrade to premium to enjoy exclusive features!"
    
    let taskItems = [
        {id: 1, taskName: "Complete Homework", completed: false},
        {id: 2, taskName: "Wash the dishes", completed: true},
        {id: 3, taskName: "Take out the trash", completed: true},
        {id: 4, taskName: "Complete BLU Lua", completed: true},
        {id: 5, taskName: "Plan Final Project", completed: false}
    ]

    return (
        <>
            <h1>Welcome back, {userName}!</h1>
            <p>{message}</p>                
            <ul>
                {taskItems.map((task, index) => (
                    <li key={task.id || index}>
                        {task.taskName} {task.completed ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DynamicDashboard;