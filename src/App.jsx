import React, { useEffect } from 'react'
import Home from './pages/Home/Home.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../src/utils/firebase.js'
import { ToastContainer, toast } from 'react-toastify';
import TVShows from './pages/TVShows/TVShows.jsx'
import Search from './pages/Search/Search.jsx'
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx'


const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If logged in and currently on /login → go home
        if (window.location.pathname === "/login") {
          navigate("/");
        }
      } else {
        // If logged out → force to login
        if (window.location.pathname !== "/login") {
          navigate("/login");
        }
      }
    });

    return () => unsubscribe();
  }, [navigate])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/tv-shows' element={<TVShows />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
