
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { editPanier, getOwnCommandes, getOwnPanier } from '../Redux/Actions/CommandeActions';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CardPanier = ({el,total,setTotal,ownPanier}) => {
  const dispatch= useDispatch()


  const [count,setCount] = useState(el.qte)
  const [newTotal,setNewTotal] = useState(ownPanier[0].total)
  // const [total,setTotal] = useState(ownPanier[0].total)
  // const calculSomme=()=>{
  //   var somme = 0
  //   // ownPanier[0].products.forEach(element => {somme + element.product.prixP * element.qte }) 
  //   for (let i = 0; i <  ownPanier[0].products.length; i++) {
  //     somme = somme + ownPanier[0].products[i].product.prixP * ownPanier[0].products[i].qte
      
  //   }
    
  // }
// useEffect(()=>{

//     calculSomme()
//     // setTotal(somme)
    
    
// }, [count])

const handleEdit=()=>{
  var somme = 0
  var newProducts =  ownPanier[0].products.map((pro,i,t)=>pro._id == el._id ? {...pro,qte : count} : pro)
 for (let i = 0; i <  newProducts.length; i++) {
    somme = somme + newProducts[i].product.prixP * newProducts[i].qte
    
  }
  dispatch(editPanier(ownPanier[0]._id,{total : somme  ,products :newProducts},navigate))
}

const handleDelete=()=>{
  var somme = 0
  var newProducts =  ownPanier[0].products.filter((pro,i,t)=>pro._id != el._id)
  for (let i = 0; i <  newProducts.length; i++) {
     somme = somme + newProducts[i].product.prixP * newProducts[i].qte
     
   }
  dispatch(editPanier(ownPanier[0]._id,{total : somme,products :newProducts},navigate))
}
  const navigate = useNavigate()


    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title >{el.product.nameProduct}</Card.Title>
          <Card.Title>{el.qte}</Card.Title>
          <div style={{display: 'flex', justifyContent:'space-evenly', width: '130px', alignItems:'center', fontFamily:'cursive', fontSize:'16px'}}>
                        <Button style={{borderRadius: '50%', fontWeight:'bold'}} variant="outline-dark" onClick={()=> count>0 && setCount(count-1)}>-</Button>
                            <span>{count}</span>
                        <Button style={{borderRadius: '50%', fontWeight:'bold'}} variant="outline-dark" onClick={()=> setCount(count+1)}>+</Button><br/><br/><br/>
                        {/* <h1>{!Number(total) ? 0 : total}</h1> */}
                    </div>
          <Card.Text>
           
          </Card.Text>
          <Button onClick={()=>  handleEdit()}>Edit</Button>
          <Button onClick={()=> handleDelete() }>Delete</Button>
        </Card.Body>
      </Card>
    )
};

export default CardPanier;