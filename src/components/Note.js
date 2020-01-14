import React from 'react'

const Note = ({note}) => (
    <div>
        <h4>{ note.titulo }</h4>
        <p>{ note.descripcion }</p>
    </div>
)

export default Note