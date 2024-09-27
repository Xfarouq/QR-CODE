const tasks = [
        { title: 'Task 1', description: 'Do the laundry' },
        { title: 'Task 2', description: 'Clean the house' },
        { title: 'Task 3', description: 'Buy groceries' }
    ];
    
    const renderTasks = tasks => {
        const container = document.getElementById('taskContainer');
        container.innerHTML = '';
        tasks.forEach(task => {
            container.innerHTML += `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                </div>
            `;
        });
    }
    
    renderTasks(tasks);