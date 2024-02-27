import { ADDPRODUCT, GETALLPRODUCTS, GETONEPRODUCT } from "../ActionTypes/ProductTypes";
import axios from 'axios'
import { handleError } from "./ErrorActions";
export const addProduct=(newProduct,navigate) => async(dispatch)=>{
    try {
        const res = await axios.post('/api/product/addProduct',newProduct)

        dispatch({
            type: ADDPRODUCT,
            payload: res.data
        })

        navigate('/ListProduct')
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const getAllProducts=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/product/getAllProduct')

       dispatch(
        {
            type : GETALLPRODUCTS,
            payload : res.data.products
        }
       )
    } catch (error) {
        console.log(error)
    }
}



export const getOneProduct=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/product/getOneProduct/${id}`)

       dispatch(
        {
            type : GETONEPRODUCT,
            payload : res.data.product
        }
       )
    } catch (error) {
        console.log(error)
    }
}


export const editProduct=(id,upProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/product/updateProduct/${id}`,upProduct)

        dispatch(getAllProducts())

        navigate('/ListProduct')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteProduct=(id,navigate)=>async(dispatch)=>{
    try {


            await axios.delete(`/api/product/deleteProduct/${id}`)

            dispatch(getAllProducts())
            
            navigate('/ListProduct')
        
        
    } catch (error) {
        console.log(error)
    }
}