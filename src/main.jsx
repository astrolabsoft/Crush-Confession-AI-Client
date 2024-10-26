import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import CrushConfessionAI from './Pages/CrushConfessionAI.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },{
        path:'Crush-Confession-AI',
        element: <CrushConfessionAI></CrushConfessionAI>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
