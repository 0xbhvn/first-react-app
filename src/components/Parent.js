import React, { PureComponent } from 'react'
import Reg from './Regular'
import Pure from './Pure'

class Parent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bhaven'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Bhaven'
            })
        }, 2000)
    }

    render() {
        console.log('Parent component render')
        return (
            <div>
                Parent Component
                <Reg name={ this.state.name } />
                <Pure name={ this.state.name } />
            </div>
        )
    }
}

export default Parent
