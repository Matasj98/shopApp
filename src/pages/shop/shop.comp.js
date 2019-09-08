import React from 'react';

import SHOP_DATA from './shop.data';

import Preview from '../../components/collection/preview.comp';

import './shop.style.scss';

class Shop extends React.Component{
    constructor(){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop">
                <h1>Collection</h1>
                {
                collections.map(({id, title, routeName, items})=>{
                    return <Preview key={id} title={title} routeName={routeName} items={items}/>
                })
                }
            </div>
        )
    }
}

export default Shop