import React from 'react'

const Form = ({ titulo, descripcion, handlerTitulo, handlerDescripcion, handlerSubmit }) => (
        <div>
            <label>Titulo</label>
            <br/>
            <input type="text" placeholder="Actividad a realizar" value={titulo} onChange={ handlerTitulo }/>
            <br/><br/>
            <label>Descripción</label>
            <br/>
            <textarea value={descripcion} onChange={ handlerDescripcion } />
            <br/><br/>
            <button onClick={ handlerSubmit }>Guardar</button>
        </div>
    )


export default Form