import React from 'react';

const Total = ({ items }) => {
    return <span>
        { items.reduce((sum, item) => 
            (sum + item.price * item.count), 0).toFixed(2) }
    </span>
}

export default Total;
