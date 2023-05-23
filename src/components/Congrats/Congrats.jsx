import React from 'react'

export const Congrats = ({ orderId }) => {
    return (
        <div className="container">
            <div className="row justify-content-center"></div>
            <h3>Felicitaciones! Tu orden se generó correctamente. La misma es:</h3>
            <h4>{orderId}</h4>
        </div>
    )
}
