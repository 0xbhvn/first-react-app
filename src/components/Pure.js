import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    render() {
        console.log('Pure component render')
        return (
            <div>
                Pure Component { this.props.name }
            </div>
        )
    }
}

export default Pure
