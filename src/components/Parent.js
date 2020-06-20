import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

class Parent extends Component {
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
                {/* <Reg name={ this.state.name } /> */}
                {/* <Pure name={ this.state.name } /> */}
                <MemoComponent name={ this.state.name } />
            </div>
        )
    }
}

export default Parent
