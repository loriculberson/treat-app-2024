/* eslint-disable react/prop-types */
import './MenuItem.css'

function Item(props){
    // eslint-disable-next-line react/prop-types
    const { item, handleFavorites, isFavorite } = props
    return (
        <div key={item.id} className='item'>
            <img src={item.img} className='item-image'/>
            <h3>{item.name}</h3>
            <p>{isFavorite ? 'Fav' : 'Not Fav'}</p>
            <button 
                onClick={() => handleFavorites(item.id)}
            >
                Add to fav
            </button>
        </div>
    )
}

export default Item 