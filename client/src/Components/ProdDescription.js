import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../Redux/Actions/ProductActions";
import Button from 'react-bootstrap/Button';
import { addCommande, editCommande, editPanier, getOwnPanier } from "../Redux/Actions/CommandeActions";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { addCommentaire, getAllCommentaire } from "../Redux/Actions/CommentaireActions";
import Avis from "./Avis";


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



const ProdDescription = () => {
    const {id} = useParams()
    const [count,setCount] = useState(0)
    const [total,setTotal] = useState(0)
    // console.log(id)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getOneProduct(id))
        dispatch(getAllCommentaire(id))
        dispatch(getOwnPanier())
    },[])
    const oneProduct = useSelector(state=> state.ProductReducer.oneProduct)
    const commentaires = useSelector(state=> state.CommentaireReducer.commentaires)
    const ownPanier = useSelector(state=> state.CommandeReducer.ownPanier)
    const [commentaire,setCommentaire] = useState('')
    useEffect(()=>{
         setTotal(count * oneProduct.prixP)
    },[count])
    const navigate = useNavigate()

    const handleAdd=()=>{
        if(ownPanier.length == 0){
            dispatch(addCommande({total,products :[ {qte : count,product : id}]},navigate))
        }else{
            dispatch(editPanier(ownPanier[0]._id,{total : ownPanier[0].total + total,products :[...ownPanier[0].products, {qte : count,product : id}]},navigate))
        }
        
    }
    // const handleAjouter=()=>{
    //     var panier = localStorage.getItem('panier')
    //     console.log(count , id)
    //     if (panier == null) {
    //         localStorage.setItem('panier', JSON.stringify([{product: id, qte : count}]))
    //     } else {
    //         localStorage.setItem('panier',JSON.stringify([...JSON.parse(panier),{product: id, qte : count}]))
    //     }
    
    // }
    return (
            <div >
                <div className="p_description">
                <div >
                    <Container >
                        <Row>
                            <Col xs={6} md={4}>
                            <Image style={{width: '450px', height: '450px'}} src={oneProduct.image} rounded />
                            </Col>
                        </Row>
                    </Container>

                </div>
                <div>
                <br/>
                    <h3>{oneProduct.nameProduct}</h3><br/>
                    <p>{oneProduct.description}</p><br/>
                    <h6>{oneProduct.prixP} TND</h6><br/>

                    <div style={{display: 'flex', justifyContent:'space-evenly', width: '130px', alignItems:'center', fontFamily:'cursive', fontSize:'16px'}}>
                        <Button style={{borderRadius: '50%', fontWeight:'bold'}} variant="outline-dark" onClick={()=> count>0 && setCount(count-1)}>-</Button>
                            <span>{count}</span>
                        <Button style={{borderRadius: '50%', fontWeight:'bold'}} variant="outline-dark" onClick={()=> setCount(count+1)}>+</Button><br/><br/><br/>
                        {/* <h1>{!Number(total) ? 0 : total}</h1> */}
                    </div>



                    <InputGroup style={{width:'97%'}}>
                        <InputGroup.Text>Commentaire</InputGroup.Text>
                        <Form.Control value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} as="textarea" aria-label="Ajouter un Commentaire" />
                    </InputGroup><br/>


                    <Button  variant="outline-primary" style={{marginLeft: '495px'}} onClick={()=>{dispatch(addCommentaire({commentaire,product : id}));setCommentaire('')}}>Ajouter un Commentaire</Button>

                    {/* <Button onClick={()=> handleAjouter()} variant="primary">Ajouter au panier</Button> */}
                    {
                        count>0 && 
                            <>
                                <h3>Total : {total} TND</h3>
                                <Button  variant="outline-primary" onClick={()=> handleAdd()}>Ajouter Commande</Button>
                            </>
                    }<br/>

                </div>
                </div>
                {
                      commentaires.map((el,i,t)=> <Avis el={el}/>)
                }
            </div>
            

    );
};

export default ProdDescription;