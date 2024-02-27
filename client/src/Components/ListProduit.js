import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import { getAllProducts } from "../Redux/Actions/ProductActions";
import CardProd from "./CardProd";
import { useLocation } from "react-router-dom";

const ListProduit = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

    const products = useSelector(state=> state.ProductReducer.products)

    const location = useLocation()

    return (
        <div className="carte_l">
            {
              location.pathname == "/ListProduct" ?
              products.map((el,i,t)=> <CardProd el={el}/>)
              :
              location.pathname == "/ListProductChemise" ?
              products.filter((el,i,t)=> el.categorie == 'Chemises').map((el,i,t)=> <CardProd el={el}/>)
              :
              location.pathname == "/ListProductPantalon" ?
              products.filter((el,i,t)=> el.categorie == 'Pantalons').map((el,i,t)=> <CardProd el={el}/>)
              :
              products.filter((el,i,t)=> el.categorie == 'Chaussures').map((el,i,t)=> <CardProd el={el}/>)
            }
        </div>
    );
};

export default ListProduit;