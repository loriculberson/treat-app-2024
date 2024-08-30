import { useState } from 'react'
import Item from './Item'
import { productData } from "../data/productData"   
import './MenuItem.css'

function MenuItems(){
    const [favorites, setFavorites] = useState([])

    function handleFavorites(id){
        /*
        add this function to each Item
        when button is clicked, the item's id will get passed into this function
        which will update the favorites array
        */
        const updatedFavorites = [...favorites, id]
        setFavorites(updatedFavorites)
    }

    function isFavorite(id){
       return favorites.includes(id)
    }

    console.log(favorites)
    const list = productData.map(item => 
        <Item 
            key={item.id} 
            item={item} 
            handleFavorites={handleFavorites}
            isFavorite={isFavorite(item.id)}
        />)
    return (
        <div className='container'>{list}</div>
    )
}

export default MenuItems