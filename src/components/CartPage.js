import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import Total from './Total';

import '../css/CartPage.css';

const CartPage = ({ items, onAddOne, onRemoveOne }) => {

    return <div>
        <ul className="CartPage-items">
            { items.map(item =>
                <li key={ item.id } className="CartPage-item">
                    <Item item={ item }>
                        <div className="CartItem-controls">
                            <button className="CartItem-removeOne" 
                                    onClick={ () => onRemoveOne(item) }>
                                &ndash;
                            </button>
                            <span className="CartItem-count">
                                { item.count }
                            </span>
                            <button className="CartItem-addOne" 
                                    onClick={ () => onAddOne(item) }>
                                +
                            </button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
        <div className="font-weight-bold text-right">
            Total: $<Total items={ items } />
        </div>
    </div>
    
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
