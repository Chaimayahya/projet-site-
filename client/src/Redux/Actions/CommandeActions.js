import { GETALLCOMMANDES, GETOWNCOMMANDE, GETOWNPANIER } from "../ActionTypes/CommandeTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"
import { GETOWNPRODUCTS } from "../ActionTypes/ProductTypes"
export const getAllCommandes=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/commande/getAllCommande')

       dispatch(
        {
            type : GETALLCOMMANDES,
            payload : res.data.commandes
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const getOwnCommandes=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/commande/getOwnCommande',{
        headers : {
            Authoraziation : localStorage.getItem('token')
        }
    })

       dispatch(
        {
            type : GETOWNCOMMANDE,
            payload : res.data.commandes
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const getOwnPanier=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/commande/getOwnPanier',{
        headers : {
            Authoraziation : localStorage.getItem('token')
        }
    })

       dispatch(
        {
            type : GETOWNPANIER,
            payload : res.data.commandes
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const addCommande=(newCommande,navigate) => async(dispatch)=>{
  
    try {
        const res = await axios.post('/api/commande/addCommande',newCommande,{
            headers : {
                Authoraziation : localStorage.getItem('token')
            }
        })

        dispatch(getAllCommandes())

        navigate('/Panier')
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const editCommande=(id,upCommande,location)=>async(dispatch)=>{
    try {
        // console.log(id)
        // console.log(upCommande)
        // console.log(location)
        await axios.put(`/api/commande/updateCommande/${id}`,upCommande)

        if (location.pathname == '/Profil') {
            dispatch(getOwnCommandes())
        } else {
            dispatch(getAllCommandes())
               }
        

    
    } catch (error) {
        console.log(error)
    }
}

export const editPanier=(id,upCommande,navigate)=>async(dispatch)=>{
    try {
        // console.log(id)
        // console.log(upCommande)
        // console.log(location)
        await axios.put(`/api/commande/updateCommande/${id}`,upCommande)

        dispatch(getOwnPanier())
        dispatch(getOwnCommandes())
        navigate('/Panier')
        

    
    } catch (error) {
        console.log(error)
    }
}

export const commanderPanier=(id,upCommande,navigate)=>async(dispatch)=>{
    try {
        // console.log(id)
        // console.log(upCommande)
        // console.log(location)
        await axios.put(`/api/commande/updateCommande/${id}`,upCommande)

        dispatch(getOwnPanier())
        dispatch(getOwnCommandes())
        navigate('/Profil')
        

    
    } catch (error) {
        console.log(error)
    }
}

export const DeleteCommande=(id,location)=>async(dispatch)=>{
    try {


            await axios.delete(`/api/commande/deleteCommande/${id}`)
            if (location.pathname == '/Profil') {
                dispatch(getOwnCommandes())
            } else {
                dispatch(getAllCommandes())
                   }
           
        
    } catch (error) {
        console.log(error)
    }
}