const INITIAL_VALUE = {
  Fav: [],
  
}
export default function FavReducer(state=INITIAL_VALUE, action){
  switch (action.type) {
    case 'addFavItem':
      return {
        
        Fav: [...state.Fav ,action.payload] ,
       
        
      }
      case 'removeFromFav':
        
          const updatedFavorites = state.Fav.filter(
            (item) => item.id !== action.payload
          );
          return {
            
            Fav: updatedFavorites,
          };
        
  
  
    default:
      return state;
  }
}