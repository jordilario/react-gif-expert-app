import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="divImage animate__animated animate__fadeInUpBig">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
