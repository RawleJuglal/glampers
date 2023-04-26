import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home.jsx'
import Tents from './pages/Tents/Tents'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='tents' element={<Tents />}/>
    <Route path="login" element={<Login />}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
