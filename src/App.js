import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pages/Login';
import Register from './Pages/Register';
import ToDoList from './Pages/ToDoList';
import ListMovies from './Pages/ListMovies';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './Components/Navbar';
import MovieDetails from './Pages/MovieDetails'
import Favourites from './Pages/Favourites';
import { useState } from 'react';
import { LangContext } from './Context/langContext';
function App() {
  const [contextLang, setContextLang] = useState("En from context")
  return (
    <div>
    <LangContext.Provider value = {{contextLang, setContextLang}}>

    

    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path={"/Register"} component={Register} />
        <Route exact path={"/Login"} component={Login} />
        <Route exact path={"/"} component={ListMovies} />
        <Route exact path={"/moviedetails/:id"} component={MovieDetails}  />

        <Route exact path={"/Favourites"} component={Favourites} />
      </Switch>
    </BrowserRouter>
    </LangContext.Provider>
    </div>
    
    
  );
}

export default App;
