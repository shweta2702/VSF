import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

    go() {
        console.log(' bowbow '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>This is home page dear! bow bow!!</h1>
            </div >
        )
    }
}


export default withRouter(Home)

