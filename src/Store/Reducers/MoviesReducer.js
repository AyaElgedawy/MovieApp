const INITIAL_VALUE = {
    Movies: [],
    
  }
  export default function MoviesReducer(state=INITIAL_VALUE, action){
    switch (action.type) {
      case 'Get_Movies':
        return {
            ...state,
            Movies: [...state.Movies ,action.payload] ,
         
          
        }
        
      default:
        return state;
    }
  }