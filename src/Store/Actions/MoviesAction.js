import axios from "axios"
// import { useDispatch } from "react-redux"

export const getMovies = () => (dispatch)=>{
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=08435d7890fc0b66e05d90f2fe18b3bc")
    .then ((res) => dispatch({
        type: "Get_Movies",
        payload: res.data.results
    }))
    .catch((err) => console.log(err))
}