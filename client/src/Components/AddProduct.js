import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../Redux/Actions/ProductActions";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
    const [refP, setRefP] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const [description, setDescription] = useState('')
    const [prixP, setPrixP] = useState(0)
    const [image, setImage] = useState('')
    const [categorie,setCategorie] = useState('Chemises')


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddProd=(e)=>{
        e.preventDefault()
        dispatch(addProduct({refP,nameProduct,description,prixP,image,categorie}, navigate))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>reference</Form.Label>
                    <Form.Control onChange={(e)=>setRefP(e.target.value)} type="text" placeholder="Enter ref" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name Product</Form.Label>
                    <Form.Control onChange={(e)=>setNameProduct(e.target.value)} type="text" placeholder="Enter NameProduct" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control onChange={(e)=>setPrixP(e.target.value)} type="number" placeholder="Enter prix" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={(e)=>setImage(e.target.value)} type="text" placeholder="Enter image" />
                </Form.Group>
                <h5>Categorie : </h5>
                <Form.Select onChange={(e)=>setCategorie(e.target.value)} aria-label="Default select example">
                    <option>categorie</option>
                    <option value="Chemises">Chemises</option>
                    <option value="Pantalons">Pantalons</option>
                    <option value="Chaussures">Chaussures</option>
                </Form.Select>

        <br/>
                <Button style={{width:'80px', marginLeft:'160px'}} onClick={(e)=> handleAddProd(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddProduct;