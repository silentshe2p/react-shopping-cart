import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import '../css/ItemPage.css';

const ItemPage = ({ items, cart, onAddToCart }) => {

    return <ul className="ItemPage-items">
        { items.map(item =>
            <li key={ item.id } className="ItemPage-item">
                <Item className="d-inline-flex flex-column" item={ item }>
                    <button className={ cart.includes(item.id) 
                                ? "Item-addToCart carted"
                                : "Item-addToCart" }
                            onClick={ () => onAddToCart(item) }>
                        { cart.includes(item.id) ? "Add More" : "Add to Cart" }
                    </button>
                </Item>
            </li>
        )}
    </ul>;

}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
