import React, {useState} from 'react';
import uniqid from 'uniqid';

const ToDo = () => {

    const [task, setTask] = useState('');
    const [taskList, setTasksList] = useState([]);

    const addTask = (e) => {
        e.preventDefault(); // para que no se refresque la página al hacer submit
        const newTask = {
            id: uniqid(),
            title: task
        }
        setTasksList([...taskList, newTask])
        setTask('')
    }

    const deleteTask = (id) => {
        const newTaskList = taskList.filter(item => item.id !== id)
        setTasksList(newTaskList);
    }

    return (
        <div>
            <h2>To Do List</h2>
            <div className="row">
                <div className="col">
                    <form onSubmit={(e) => addTask(e)} action="" className="form-group">
                        <h3>Agrega una tarea</h3>
                        <input
                            onChange={(e) => {
                            setTask(e.target.value)
                        }}
                            type="text"
                            className="form-control mb-3"
                            placeholder="Agrega una nueva tarea"
                            value={task}/>
                        <input type="submit" className="btn btn-block btn-info" value="Agregar tarea"/>
                    </form>
                </div>
                <div className="col">
                    <h3>Listado de tareas</h3>
                    <ul className="list-group">
                        {
                            taskList.map(item => 
                                <li key={item.id} className="list-group-item">
                                    {item.title}
                                    <button className="btn btn-danger float-right" onClick={() => {deleteTask(item.id) } }>X</button>
                                </li>
                            )
                        }

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ToDo;