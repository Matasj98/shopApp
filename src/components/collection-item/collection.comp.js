import React from 'react';
import './collection.style.scss';

const CollectionItem = ({name, img, price}) =>{
    return(
        <div className="item">
            <div className="bc-img" style={{ backgroundImage: `url(${img})` }}>
                
            </div>
            <div className="cart">Add to cart</div>
            <div className="content">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    )
}

export default CollectionItem;