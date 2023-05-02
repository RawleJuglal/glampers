import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HostLayout from './components/HostLayout/HostLayout'
import Error from './components/Error/Error'
import Home from './pages/Home/Home.jsx'
import {Dashboard, loader as dashboardLoader} from './pages/Host/Dashboard/Dashboard'
import Income from './pages/Host/Income/Income'
import Reviews from './pages/Host/Reviews/Reviews'
import {HostTents, loader as hostTentsLoader} from './pages/Host/HostTents/HostTents'
import HostTentDetails from './pages/Host/HostTents/HostTentDetails'
import TentInfo from './pages/Host/TentInfo/TentInfo'
import Pricing from './pages/Host/Pricing/Pricing'
import Photos from './pages/Host/Photos/Photos'
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
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={dashboardLoader}/>
      <Route path='income' element={<Income />}/>
      <Route path='reviews' element={<Reviews />}/>
      <Route path='tents' element={<HostTents />} loader={hostTentsLoader}/>
      <Route path='tents/:id' element={<HostTentDetails />}>
        <Route index element={<TentInfo />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="photos" element={<Photos />}/>
      </Route>
    </Route>
    <Route path="login" element={<Login />}/>
    <Route path="*" element={<NotFound />}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
