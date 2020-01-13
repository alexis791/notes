const initialState = {
    notes : [
        {id : 1, title : 'Leer', description : 'Continuer leyendo el libro enfocate'},
        {id : 2, title : 'Correo', description : 'Correr 5km en la milla'},
        {id : 3, title : 'Practicar', description : 'Practicar React'}
    ]
}

const notesReducer = ( state = initialState, action ) => {
    return state
}

export default notesReducer