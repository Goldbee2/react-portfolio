import React from 'react'
import "./Card.css"

function Card({title, body, width, height}) {
    
    const cardStyles = {
        width: `${width}`,
        height: `${height}`
    }

    return (
        <div className="card-container" style={cardStyles}>
            <div clasName = "card-content">
                <h3 className = "card-title">
                    {title}
                </h3>
                <div className = "card-body">
                    {body}
                </div>
            </div>
            {/* <div className="btn">
                    <button>
                        <a>View More</a>
                    </button>
                </div> */}
            
        </div>
    )
}

export default Card
