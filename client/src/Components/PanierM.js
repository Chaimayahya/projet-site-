import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux" 
import { commanderPanier, editPanier, getOwnCommandes, getOwnPanier } from "../Redux/Actions/CommandeActions";
import CardCommande from "./CardCommande";
import Table from 'react-bootstrap/Table';
import CardPanier from "./CardPanier";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const PanierM = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getOwnPanier())
    },[])

    const ownPanier = useSelector(state=> state.CommandeReducer.ownPanier)
    const [total,setTotal] = useState(ownPanier[0]?.total)
  
    useEffect(()=>{       
        setTotal(ownPanier[0]?.total)
    },[ownPanier])
    return (
        <div>
            <h1>{total}</h1>
            {/* <input value= type="text"/> */}
            {/* Total : {total} */}
            {
                ownPanier[0]?.products?.map((el,i,t)=> <CardPanier ownPanier={ownPanier} el={el} total={total} setTotal={setTotal}/>)
            }
        <Button  onClick={()=>dispatch(commanderPanier(ownPanier[0]._id,{comm : true},navigate))} variant="danger">Commander</Button> 
        </div>
    );
};

export default PanierM;