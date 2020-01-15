export const createNote = (note) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirestore()

        firebase.collection('notes').add({
            ...note,
            date : new Date()
        }).then( () => {
            dispatch({ type : 'CREATE_NOTE'})
        }).catch( () => {
            dispatch({ type : 'CREATE_NOTE_ERROR'})
        })
        
        // firebase.push(note)
        // .then(() => {
        //     dispatch({ type : 'CREATE_NOTE'})
        // }).catch( () => {
        //     dispatch({ type : 'CREATE_NOTE_ERROR'})
        // })
        // const firestore = getFirebase();
        // firestore.collection('notes').add({
        //     ...note,
        //     createdAt: new Date()
        // }).then( () => {
        //     dispatch({ type:'CREATE_NOTE' })
        // }).catch( () => {
        //     dispatch({ type : 'CREATE_NOTE_ERROR' })
        // })
    }
}