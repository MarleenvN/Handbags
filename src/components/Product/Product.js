import React from 'react';

function Product({label, img, altText, nameBag, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={img} alt={altText}/>
            <p>{nameBag}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;