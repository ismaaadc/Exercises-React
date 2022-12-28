import React, { useState } from "react"

export const TaskForm = ({createTask}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title)
            return alert("Campos vacíos")

        createTask(title, description)
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} /><br/>
            <textarea placeholder="Descripción" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button>Guardar</button>
        </form>
    )
}