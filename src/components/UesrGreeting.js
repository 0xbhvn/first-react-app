import React, { Component } from 'react'

class UesrGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        return (
            this.state.isLoggedIn ? <div>Welcome Bhaven</div> : <div>Welcome Guest</div>
        )

        // let message

        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Bhaven</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{ message }</div>

        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Bhaven</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <h2>Welcome Guest</h2>
        //         <h2>Welcome Bhaven</h2>
        //     </div>
        // )
    }
}

export default UesrGreeting
