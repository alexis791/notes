import React from 'react'

const Note = ({ titulo, descripcion }) => (
    <div>
        <h4>{ titulo }</h4>
        <p>{ descripcion }</p>
    </div>
)

export default Note