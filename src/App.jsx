import './App.css'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Dashboard from './pages/Dashboard'
function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element:<Dashboard/>
  },

])
return(
  <>
        <RouterProvider router={router} />
  </>
)
}

export default App
