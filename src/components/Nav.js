import React from 'react';
import Total from './Total';

const Nav = ({ cartItems, activeTab, onTabChange }) => {
    
    return <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                <a onClick={() => onTabChange(0)}>Items</a>
            </li>
            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                <a onClick={() => onTabChange(1)}>Cart</a>
            </li>
            <li className="App-nav-cart">
                <a onClick={() => onTabChange(1)}>
                    <div className="text-primary">
                        <i className="mr-2 fas fa-shopping-cart" />
                        { cartItems.reduce((count, item) => 
                            (count + item.count), 0) } items
                    </div>
                    { activeTab === 0 &&
                        <div className="ml-4 text-success">
                            $<Total items={ cartItems } />
                        </div> }
                </a>
            </li>
        </ul>
    </nav>;

}

export default Nav;
