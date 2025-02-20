import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

function AxiosPract() {
    const [udata, setudata] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response);
                setudata(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error); 
            });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
                <ProductList products={udata}/>
        </div>
    );
}



export default AxiosPract;
