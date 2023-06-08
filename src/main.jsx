import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AnimatedCursor from "react-animated-cursor"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <AnimatedCursor />
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
