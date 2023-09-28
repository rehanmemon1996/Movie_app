import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./pages/home/home"
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import { useEffect,useState } from 'react';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
// AiOutlineImport


import { auth } from "./firebase";
import { AiOutlineImport } from 'react-icons/ai';

function App() {
 


  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
       
        <Routes>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          {/* <Route path='/' element={<h1>Error Page</h1>}></Route> */}

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
