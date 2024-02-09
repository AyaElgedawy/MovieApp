
export const addFav = (payload) => ({ // movie object
  type: 'addFavItem',
  payload
  
 
})

export const removeFav = (payload) => {  // movie id
  return {
    type: 'removeFromFav',
    payload
    
  };
};