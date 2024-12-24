import { useState } from "react";




export default function Reducer() {
    const seed = ['Buy coffee', 'Wash car', 'Fill gas']
    .map((task, index) => 
        ({id:index, isDone:false, value:task}));

    const [tasks, setTasks] = useState(seed);

    const parentOnClickDelete = (task) => {
        console.debug(task);
        setTasks(tasks.filter(t => t.id !== task.id));
    };
    const parentOnClickUpdate = (task) => {
        console.debug(task);
        setTasks(tasks.map(t => t.id === task.id ? task : t));
    }; 

    return (
        <div>
            <h1>Reducer</h1>
            <TaskList tasks={tasks} 
                parentOnClickDelete={parentOnClickDelete} 
                parentOnClickUpdate={parentOnClickUpdate}/>
        </div>
    );
}

function TaskList({tasks, parentOnClickDelete, parentOnClickUpdate}) {
    return (
        <ul>
            { tasks.map(task => 
                <TaskEntry key={task.id} task={task} 
                parentOnClickDelete={parentOnClickDelete} 
                parentOnClickUpdate={parentOnClickUpdate}/>)
            }
        </ul>
    );
}

function TaskEntry({task, parentOnClickDelete, parentOnClickUpdate}) {
    const [mode, setMode] = useState('view');

    const onClickEdit = () => {
        setMode('edit');
    }

    const onClickUpdate = (task) => {
        parentOnClickUpdate(task);
        setMode('view');
    }

    const editEntry = <li key={task.id}>
        <input type="text" defaultValue={task.value} onChange={e => task.value = e.target.value}/>
        <button onClick={() => {onClickUpdate(task)}}>Update</button>
        </li>;

    const viewEntry = <li key={task.id}>
        {task.value}
        <button onClick={onClickEdit}>Edit</button>
        <button onClick={() => {parentOnClickDelete(task)}}>Delete</button>
        </li>;

    return (
        mode === 'edit' ? editEntry : viewEntry
    )
}




