import React from 'react';
import axios from 'axios';

const DeleteItem = props => {
    const { productId, successCallBack } = props;

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {successCallBack();})
        .catch(err => console.error(err));
    }

    return (
        <button className="btn btn-outline-danger mx-5 px-10" onClick={deleteProduct}>DELETE</button>
    )
}

export default DeleteItem