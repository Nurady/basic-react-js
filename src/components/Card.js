import React from "react";

function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={props.content.imageUrl} alt="cat" className="card-img-top" />
            <div className="card-body">
                <h4>{props.content.title}</h4>
                <div className="small text-muted">{props.content.published}</div>
            </div>
        </div>
    )
}

export default Card;