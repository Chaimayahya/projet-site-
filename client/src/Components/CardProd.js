import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import DeleteProd from './DeleteProd'
import { useSelector } from 'react-redux';

const CardProd = ({el}) => {
  const user = useSelector(state=> state.AuthReducer.user)
    return(
        <Card style={{ width: '300px', margin: '20px' }}>
        <Card.Body >
          <Card.Text>
            <Link to={`/ProdDesc/${el._id}`}><img className='imgProduct' src= {el.image} alt='Not Found'/></Link>
            
          </Card.Text>
          <Card.Title as={Link} to={`/ProdDesc/${el._id}`}><div class="nine">
                                                                    <h1>{el.nameProduct}<span>c&h shop</span></h1>
                                                            </div>
          </Card.Title>
          {/* <Card.Title as={Link} to={`/ProfilDesc/${el._id}`}>{el.name}</Card.Title> */}


          <Card.Text style={{fontSize: '18px', textAlign:'center'}}>
            {el.prixP} TND
            <br/>
            {/* {el.categorie} */}
          </Card.Text>

      {
        user.role  == 'admin' &&
        <>
          <div className='edit_delete'>
            <Card.Link className='style_edit' as={Link} to={`/EditProduct/${el._id}`}>Modify</Card.Link>
            <DeleteProd el={el}/>
          </div>

        </>
      }
          

        </Card.Body>
      </Card>
    )
};

export default CardProd;