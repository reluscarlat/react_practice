import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <header>
                <p>Wellcome {this.props.username}</p>
            </header>
        )
    }
}

export default Header