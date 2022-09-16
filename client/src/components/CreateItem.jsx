import React from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';

const Product = () => {
    const handleSubmit = newProduct => {
        axios.post("http://localhost:8000/api/products", newProduct)
        .then((response) => console.log(response))
        .catch((err) => console.log("There was an error: ", err));
    }

    return (
        <div >
            <h1 className={"text-light"}>Product Manager</h1>
            <div className="container w-25">
                <ItemForm onSubmitProp={handleSubmit} initialTitle="" initialPrice="" initialDescription="" />
            </div>
        </div>
    )
}

export default Product