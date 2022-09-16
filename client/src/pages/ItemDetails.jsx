import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DeleteItem from '../components/DeleteItem';
import axios from 'axios';

const ItemDetails = () => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // round to nearest dollar

        min: 2, // (will round to 00.1)
        max: 2, // (will round to at least 1.00)
    });

    const [product, setProduct] = useState([]);
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
    },[id]);

    return (
        <div className={"text-light"}>
            <h1 >Product Details</h1>
            <hr/>
            <h2 ><u>{loaded && product.title}</u></h2>
            <h4 >{loaded && formatter.format(product.price)}</h4>
            <h4 >{loaded && product.description}</h4>
            <p><Link className="btn btn-outline-warning px-5" to='/edit_product' state={{id: id}}>Edit Product</Link>
            <DeleteItem productId={product._id} successCallBack={() => {navigate("/")}}/></p>
            <hr/>
            <Link to='/'><h5>Back Home</h5></Link>
        </div>
    )
}

export default ItemDetails