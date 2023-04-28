import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Error from './components/Error/Error'
import Home from './pages/Home/Home.jsx'
import { Tents, loader as tentsLoader } from './pages/Tents/Tents'
import { TentDetails, loader as tentLoader } from './pages/Tents/TentDetails'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='tents/:id' element={<TentDetails />} loader={({params})=> tentLoader(params)}/>
    <Route path='tents' element={<Tents />} loader={tentsLoader}/>
    <Route path="login" element={<Login />}/>
    <Route path="*" element={<NotFound />}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
