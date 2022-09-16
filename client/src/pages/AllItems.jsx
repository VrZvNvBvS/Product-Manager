import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteItem from '../components/DeleteItem';

const AllItems = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[products]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <h1 className={"mb-4 text-light"}>All Products</h1>
            <div>
                {loaded && products.map((product, index) => {
                    return (<p key={index}><Link to='/product_details' state={{id: product._id}}>{product.title}</Link>
                    <DeleteItem productId={product._id} successCallBack={() => {removeFromDom(product._id)}}/></p>
                    )
                })}
            </div>
        </div>
    )
}

export default AllItems