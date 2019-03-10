import React, {Component} from 'react'

class Message extends Component {
    render() {
        return(
            <div>
                {
                    this.props.isLoggedIn ? 
                    <p>You are logged in.</p> :
                    <p>You are logged out.</p>
                }
            </div>
        )
    }
}

export default Message