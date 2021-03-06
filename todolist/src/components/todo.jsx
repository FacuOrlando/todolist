import React, {useState} from 'react';

const ToDo = () => {
    return (
        <div>
            <h2>To Do List</h2>
            <div className="row">
                <div className="col">
                    <form action="" className="form-group">
                        <h3>Agrega una tarea</h3>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Agrega una nueva tarea"/>
                        <input type="submit" className="btn btn-block btn-info" value="Agregar tarea"/>
                    </form>
                </div>
                <div className="col">
                    <h3>Listado de tareas</h3>
                </div>

            </div>
        </div>
    )
}

export default ToDo;