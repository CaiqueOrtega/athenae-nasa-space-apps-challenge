import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/globalStyle.css'
import { RouterProvider } from 'react-router-dom'
import './assets/styles/globalStyle.css'
import { Router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
