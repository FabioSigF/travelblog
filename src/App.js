import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';
import EditPost from './pages/EditPost/EditPost';
import Footer from './components/Footer/Footer';
import { AppWrapper } from './App.styles';

export default function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{user}}>
      <Router>
        <AppWrapper>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path='/post/create' element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login" />} />
          </Routes>
        </AppWrapper>
      </Router>
    </AuthProvider>
  )
}
