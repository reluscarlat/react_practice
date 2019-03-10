import React from 'react'
import { domainToASCII } from 'url';



function Product(props){

    function popUpAllert() {
        alert(props.content.name)
        document.getElementById(props.content.id).style.textDecoration="line-through"
    }

    return(
        <div>
            <h2 id={props.content.id} >{props.content.name}</h2>
            <p>Price: {props.content.price}</p>
            <p>Description: {props.content.description}</p>
            <button onClick={popUpAllert}>Details</button>
            <br />
        </div>
    )
}

export default Product