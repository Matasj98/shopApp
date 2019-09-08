import React from 'react';

import './preview.style.scss';

import CollectionItem from '../collection-item/collection.comp';

const Preview = ({id, route, title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,indx)=> indx < 4)
                    .map(item=>(
                        <CollectionItem key={item.id} name={item.name} img={item.imageUrl} price={item.price}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Preview;