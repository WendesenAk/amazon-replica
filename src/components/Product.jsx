import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title, rating, price, image}) {
  const [{ basket }, dispatch] = useStateValue();
//   console.log('this is the basket', basket);
  const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                rating: rating,
                price: price,
                image: image,
            }
        });
    }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price' >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                    .fill() 
                    .map(()=>(<p>⭐</p>))
                    }                   
            </div>
        </div>
   
        <img src={image} alt="image" />
        <button onClick={addToBasket}>Add to basket</button>
    
    </div>
  )
}

export default Product
