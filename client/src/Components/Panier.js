import React, { useEffect } from 'react';
import axios from 'axios'
const Panier = () => {
    var panier = JSON.parse(localStorage.getItem('panier'))
    var tab = []

    const handleGET=async(id)=>{
        const res = await axios.get(`/api/product/getOneProduct/${id}`)
        return tab.push(res.data.product)
    }
    useEffect(()=>{
        panier.map((el,i,t)=> handleGET(el.product))
    },[])
    return (
        <div>
            {
                tab.map((el,i,t)=> <h1>{el.nameProduct}</h1>)
            }
        </div>
    );
};

export default Panier;