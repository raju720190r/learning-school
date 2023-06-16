import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AnimatedCursor from "react-animated-cursor"
import AuthProvider from './providers/AuthProvider';
import {HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <AnimatedCursor />
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
