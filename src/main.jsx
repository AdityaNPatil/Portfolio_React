import React from 'react'
import ReactDOM from 'react-dom/client'
import RemoteLayout from './components/RemoteLayout.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx'

import "./App.css"

// 📁 Apply Routing
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<RemoteLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/experience",
        element:<Experience/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
