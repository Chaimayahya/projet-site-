import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import HandleError from './Components/HandleError';
import ProfilAdmin from './Components/ProfilAdmin';
import EditUser from './Components/EditUser';
import ListUser from './Components/ListUser';
import ProfilDescription from './Components/ProfilDescription';
import AddProduct from './Components/AddProduct';
import ListProduit from './Components/ListProduit';
import EditProduct from './Components/EditProduct';
import ProdDescription from './Components/ProdDescription';
import ListCommande from './Components/ListCommande';
import Avis from './Components/Avis';
import EditCommentaire from './Components/EditCommentaire';
import Panier from './Components/Panier';
import PanierM from './Components/PanierM';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <NavUser/>

      <HandleError/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ProfilAdmin' element={<ProfilAdmin/>}/>
        <Route path='/EditUser' element={<EditUser/>}/>

        <Route path='/ListUser' element={<ListUser/>}/>

        <Route path='/ProfilDesc/:id' element={<ProfilDescription/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/> 

        <Route path='/ListProduct' element={<ListProduit/>}/>
        <Route path='/ListProductChemise' element={<ListProduit/>}/>  
        <Route path='/ListProductPantalon' element={<ListProduit/>}/> 
        <Route path='/ListProductChaussure' element={<ListProduit/>}/> 
        <Route path='/Contact' element={<Contact/>}/>
        
        <Route path='/EditProduct/:id' element={<EditProduct/>}/> 
        <Route path='/ProdDesc/:id' element={<ProdDescription/>}/>

        <Route path='/ListCommande' element={<ListCommande/>}/>
        <Route path='/Avis/:id' element={<Avis/>}/>
        <Route path='/EditCommentaire/:id' element={<EditCommentaire/>}/> 
        <Route path='/Panier' element={<PanierM/>}/> 
        {/* <Route path='/Panier' element={<Panier/>}/>  */}

      </Routes>
      <div style={{marginTop:'350px'}}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
