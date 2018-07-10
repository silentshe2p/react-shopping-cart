import React from 'react';
import PropTypes from 'prop-types';

import '../css/Item.css';

const Item = ({ item, children }) => {

    return <div className="Item">
        <div className="Item-left">
            <img className="Item-image" 
                src={`${ item.img }`} 
                alt={ "no img :(" }/>
            <div className="Item-title">
                { item.name }
            </div>
            <div className="Item-description">
                { item.description }
            </div>
        </div>
        <div className="Item-right">
            <div className="Item-price">
                ${ item.price }
            </div>
            { children }
        </div>
    </div>
    
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    children: PropTypes.node
}

export default Item;
