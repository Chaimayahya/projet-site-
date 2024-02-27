import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getOneProduct } from "../Redux/Actions/ProductActions";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProduct = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[])

    const product = useSelector(state=> state.ProductReducer.oneProduct)


    const [refP, setRefP] = useState(product.refP)
    const [nameProduct, setNameProduct] = useState(product.nameProduct)
    const [description, setDescription] = useState(product.description)
    const [prixP, setPrixP] = useState(product.prixP)
    const [image, setImage] = useState(product.image)
    
    useEffect(()=>{
        setRefP(product.refP)
        setNameProduct(product.nameProduct)
        setDescription(product.description)
        setPrixP(product.prixP)
        setImage(product.image)
      },[product])


    const navigate = useNavigate()

    const handleEditProd=(e)=>{
        e.preventDefault()
        dispatch(editProduct(id,{refP,nameProduct,description,prixP,image}, navigate))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>reference</Form.Label>
                    <Form.Control value={refP} onChange={(e)=>setRefP(e.target.value)} type="text" placeholder="Enter ref" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name Product</Form.Label>
                    <Form.Control value={nameProduct} onChange={(e)=>setNameProduct(e.target.value)} type="text" placeholder="Enter NameProduct" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control value={prixP} onChange={(e)=>setPrixP(e.target.value)} type="number" placeholder="Enter prix" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control value={image} onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image" />
                </Form.Group>
                
                <Button onClick={(e)=> handleEditProd(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default EditProduct;