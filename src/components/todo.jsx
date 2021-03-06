import React, {useState} from 'react'

const ToDo = () =>{
    return (
        <div>
            <h2>Aplicación CRUD Básica</h2>
            <div className="row">
                
                <div className="col"><h2>Formulario para añadir tareas</h2>
                <form action="" className="form-group">
                    <input className="form-control mb-3" type="text" placeholder="introduce tu tarea"/>
                    <input className="btn btn-info btn-block form-control" type="submit" value="Registrar tarea"/>
                
                </form>
                </div>
                <div className="col"><h2>Listado de Tareas</h2></div>
            </div>
        </div>
    )
}

export default ToDo