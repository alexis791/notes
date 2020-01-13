import React from 'react'

/** Components */
import Form from './components/Form'
import Note from './components/Note'

/** Redux */
import { connect } from 'react-redux'

class App extends React.Component {

    state = {
        titulo:'',
        descripcion:'',
        notes:[]
    }

    handlerTitulo = (event) => this.setState({ titulo : event.target.value })

    handlerDescripcion = (event) => this.setState({ descripcion : event.target.value })

    handlerSubmit = () => {
        this.setState({
            titulo:'',
            descripcion:'',    
            notes:[
                ...this.state.notes,
                {
                    titulo: this.state.titulo,
                    descripcion: this.state.descripcion
                }]
            })
    }

    render() {
        console.log(this.props)
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
                    this.state.notes.map( ({titulo, descripcion},key) => {
                        return <Note
                            key={ key }
                            titulo = { titulo }
                            descripcion = { descripcion }
                        />
                    } )
                }
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({ notes }) => notes


export default connect(mapStateToProps)(App)