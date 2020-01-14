const initialState = {
    notes : [
        {id : 1, titulo : 'Leer', descripcion : 'Continuer leyendo el libro enfocate'},
        {id : 2, titulo : 'Correo', descripcion : 'Correr 5km en la milla'},
        {id : 3, titulo : 'Practicar', descripcion : 'Practicar React'}
    ]
}

const notesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('Note is create ', action.note)
            return state   
    
        default:
            return state
    }
}

export default notesReducer