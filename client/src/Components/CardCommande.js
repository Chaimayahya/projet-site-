import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCommande, editCommande, editPanier } from '../Redux/Actions/CommandeActions';
import {Link, useLocation} from 'react-router-dom'
const CardCommande = ({el}) => {
  const user = useSelector(state=> state.AuthReducer.user)
  const dispatch = useDispatch()
  const location = useLocation()
    return(
        <tr>
        <td>{el?.product?.refP}</td>
        <td>{el?.owner?.name}</td>
        <td>{el?.products?.map((el,i,t)=><><Link style={{textDecoration:'none'}} to={`/ProdDesc/${el.product._id}`}><h4 >{el.product.nameProduct}</h4></Link><h6>Quantité : {el.qte}</h6></>)}</td>
        {/* <td>{el?.products?.product?.nameProduct}</td> */}
        <td>{el.qte}</td>
        <td>{el.total}</td>
        <td>{el.status}</td>
        <td style={{display:'flex', justifyContent:'space-evenly',height:'80px'}}>

{
  user.role == 'admin' &&
  <>
    <Button style={{height:'40px'}} onClick={()=>dispatch(editCommande(el._id,{status : 'Accepter'},location))} variant="success">Accepter</Button>
    <Button style={{height:'40px'}}  onClick={()=>dispatch(editCommande(el._id,{status : 'Refuser'},location))} variant="outline-danger">Refuser</Button>
  </>
}
{
  el.status !== 'Accepter' &&
  <>
  <Button style={{height:'40px'}}  onClick={()=>dispatch(DeleteCommande(el._id,location))} variant="danger">Delete</Button> 
 
  </>
}
        
        </td>

      </tr>
    )
};

export default CardCommande;