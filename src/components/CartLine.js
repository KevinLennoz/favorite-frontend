import React from "react";

export function CartLine({ orderLine}) {

    console.log(orderLine)
    return (
        <div>
            <div className="cartLine-product">
                <img id="cartLine-product-photo" src={`/resources/clothes/${orderLine.product.photos[0].path}`} alt="product"></img>
                <label>{orderLine.product.name}</label>
                <label>{orderLine.size}</label>
                <label>x{orderLine.quantity}</label>
                <label>{orderLine.price} €</label>
            </div>
            {orderLine.customs.length > 0  && orderLine.customs.map(custom => <label>{custom.design.name}</label>)}
        </div>
    )
}