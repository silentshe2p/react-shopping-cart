import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

import '../css/App.css';

class App extends React.Component {
    state = {
        activeTab: 0,
        cart: [],
        items: []
    };

    handleTabChange = (index) => {
        this.setState({
            activeTab: index
        });
    }

    handleAddToCart = (item) => {
        this.setState({
            cart: [...this.state.cart, item.id]
        });
    }

    handleRemoveOne = (item) => {
        let index = this.state.cart.indexOf(item.id);
        this.setState({
            cart: [
                ...this.state.cart.slice(0, index),
                ...this.state.cart.slice(index + 1)
            ]
        });
    }

    getCartItems() {
        let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
            itemCounts[itemId] = itemCounts[itemId] || 0;
            itemCounts[itemId]++;
            return itemCounts;
        }, {});

        let cartItems = Object.keys(itemCounts).map(itemId => {
            let foundItem = this.state.items.find(item =>
                item.id === parseInt(itemId, 10)
            );
            return { ...foundItem, count: itemCounts[itemId] }
        });

        return cartItems;
    }

    renderCart() {
        let cartItems = this.getCartItems();
        return <CartPage 
                    items={ cartItems } 
                    onAddOne={ this.handleAddToCart } 
                    onRemoveOne={ this.handleRemoveOne } />;

    }

    renderEmptyCart() {
        return <div className="mt-5 font-weight-bold text-center">
            Cart is Empty :(
        </div>
    }

    renderContent() {

        switch(this.state.activeTab) {
            default:
            case 0: return <ItemPage 
                                items={ this.state.items }
                                cart={ this.state.cart }
                                onAddToCart={ this.handleAddToCart } />;
            case 1: return (this.state.cart.length === 0) 
                        ? this.renderEmptyCart() 
                        : this.renderCart();
        }

    }

    componentDidMount() {
        fetch("http://localhost:3010/items")
        .then(res => res.json())
        .then(items => (this.setState({items})));
    }

    render() {

        let cartItems = this.getCartItems();
        return <div className="App">
            <Nav cartItems={ cartItems } 
                activeTab={ this.state.activeTab } 
                onTabChange={ this.handleTabChange } />
            <main className="App-content">
                { this.renderContent() }
            </main>
        </div>;

    }
}

export default App;
