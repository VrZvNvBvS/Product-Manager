import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemForm from './ItemForm';
import axios from 'axios';

const EditItem = () => {
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const { id } = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    });

    const handleSubmit = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
        .then((response) => {console.log(response);})
        .then(() => {navigate(-1)})
        .catch((err) => {"There was an error"});
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <hr/>
            <div className="container w-50">
                {loaded && <ItemForm onSubmitProp={handleSubmit} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />}
            </div>
        </div>
    )
}

export default EditItem