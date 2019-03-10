import React from 'react'

function Joke(props) {
    return(
        <div className="joke">
            <p>Question: {props.content.question}</p>
            <p>PunchLine: {props.content.punchLine}</p>
        </div>
    )
}

export default Joke