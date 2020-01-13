import React from 'react';

class AddItemForm extends React.Component{
    nameRef = React.createRef();
    descRef = React.createRef();
    ownerRef = React.createRef();
    boxRef = React.createRef();
    locationRef = React.createRef();
    quantityRef = React.createRef();

    createItem = (e) => {
        e.preventDefault();
        const item = {
            name: this.nameRef.current.value,
            desc: this.descRef.current.value,
            owner: this.ownerRef.current.value,
            box: this.boxRef.current.value,
            location: this.locationRef.current.value,
            quantity: this.quantityRef.current.value,
        }
        this.props.addItem(item);
        e.currentTarget.reset();
    }
    render(){
    return (
        <form onSubmit={this.createItem}>
            <input name="name" ref={this.nameRef} type="text" placeholder="What is this?" required></input>
            <input name="desc" ref={this.descRef} type="text" placeholder="Describe this item."></input>
            <input name="owner" ref={this.ownerRef} type="text" placeholder="Who does this belong to? (ex. the cat, Sally)"></input>
            <input name="box" ref={this.boxRef} type="text" placeholder="Which box?" required></input>
            <input name="location" ref={this.locationRef} type="text" placeholder="Where is this box?"></input>
            <input name="quantity" ref={this.quantityRef} type="text" placeholder="Quantity"></input>
            <button type="submit">Add Item</button>
        </form>
    )
}
}

export default AddItemForm;