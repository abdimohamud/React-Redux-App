import React from 'react'

const Quote = (props) => {
    return (
        <div>
            <h2><i>{props.item.en}</i></h2>
            <h3>Author: {props.item.author}</h3>
            <p>Rating: {props.item.rating}</p>
        </div>
    )
}

export default Quote;
