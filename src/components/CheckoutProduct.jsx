import React from "react";
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css'


const CheckoutProduct = ({ image, rating, title, price, id, hideButton}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        })
    }
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<small>$</small>
				<strong>{price}</strong>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>⭐</p>
						))}
				</div>
				{!hideButton&&<button onClick={removeFromBasket}>Remove from Basket</button>}
			</div>
		</div>
	);
};

export default CheckoutProduct;
