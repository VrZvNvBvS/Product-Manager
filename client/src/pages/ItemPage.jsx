import React from 'react';
import CreateProduct from "../components/CreateItem";
import AllItems from "./AllItems";

const ItemPage = () => {
    return (
        <div>
            <CreateProduct />
            <hr/>
            <AllItems />
        </div>
    )
    }

export default ItemPage