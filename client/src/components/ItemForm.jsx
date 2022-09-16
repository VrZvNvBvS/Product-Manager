import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const ItemForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [productTitle, setProductTitle] = useState(initialTitle);
    const [productPrice, setProductPrice] = useState(initialPrice);
    const [productDescription, setProductDescription] = useState(initialDescription);

    const location = useLocation();
    const { id } = location.state || "";

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp({title: productTitle, price: productPrice, description: productDescription});
        setProductTitle('');
        setProductPrice('');
        setProductDescription('');
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="input-group my-lg-1">
                <label className="input-group-text col-3">Title:</label>
                <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductTitle(e.target.value)}} value={productTitle}></input>
            </div>
            <div className="input-group my-lg-1">
                <label className="input-group-text col-3">Price:</label>
                <input type="number" step="0.01" min="0.01" className="form-control form-control-lg" onChange={(e) => { setProductPrice(e.target.value)}} value={productPrice}></input>
            </div>
            <div className="input-group my-lg-1">
                <label className="input-group-text col-3">Description:</label>
                <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductDescription(e.target.value)}} value={productDescription}></input>
            </div>
            <button className="btn btn-lg btn-outline-primary px-10" type="submit">Submit</button>
            {location.pathname === "/edit_product" && <Link className="btn btn-lg btn-secondary px-5 mx-3" to='/product_details' state={{id: id}}>Cancel</Link>}
        </form>
    )
}

export default ItemForm