export const createNote = (note) => {
    return (dispatch, getState) => {
        //Make async call
        dispatch({ type: 'CREATE_NOTE', note }) 
    }
}