import React from 'react'

/** Components */
import Form from './components/Form'
import Note from './components/Note'

/** Redux */
import { connect } from 'react-redux'
import { createNote } from './redux/actions/noteActions'

class App extends React.Component {

    state = {
        titulo:'',
        descripcion:''
    }

    

    handlerTitulo = (event) => this.setState({ titulo : event.target.value })

    handlerDescripcion = (event) => this.setState({ descripcion : event.target.value })

    handlerSubmit = () => {
       this.props.createNote(this.state)
    }

    render() {
        const { notes } = this.props
        return (
        <div>
            <Form 
                titulo={this.state.titulo}
                descripcion={this.state.descripcion}
                handlerTitulo={this.handlerTitulo}
                handlerDescripcion={this.handlerDescripcion}
                handlerSubmit={this.handlerSubmit}
            />
            <hr/>
            <div>
                <h1>Notas</h1>
                {
                    notes.map( (note, key) => {
                        return <Note note={ note } key={ key } />
                    } )
                }
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({ notes }) => notes

const dispatchStateToProps = {
    createNote
}


export default connect(mapStateToProps, dispatchStateToProps)(App)