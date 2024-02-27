import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 
import { getAllCommandes } from "../Redux/Actions/CommandeActions";
import CardCommande from "./CardCommande";
import Table from 'react-bootstrap/Table';
const ListCommande = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllCommandes())
    },[])

    const commandes = useSelector(state=> state.CommandeReducer.commandes)
    return (
        <div>
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Client</th>
                  <th>Produit</th>
                  <th>Qte</th>
                  <th>Prix total</th>
                  <th>Status</th>
                  <th>Validate</th>
                </tr>

              
              </thead>
              <tbody>
              {
                commandes &&        commandes.map((el,i,t)=> <CardCommande el={el}/>)
                    }
              </tbody>
            </Table>
            
        </div>
    );
};

export default ListCommande;