
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import Movie from './components/Movie';
import WebShow from './components/WebShow';
import Anime from './components/Anime';
import Login from './components/Login';
import Signup from './components/Signup';
import './index.css'
import PrivacyPolicy from './components/Footer Pages/PrivacyPolicy';
import Cookies from './components/Footer Pages/Cookies';
import Terms from './components/Footer Pages/Terms';
import Help from './components/Footer Pages/Help';


const Rout = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
   
  },
  {
    path:"/movie",
    element:<Movie/>
  },
  {
    path:"/webshows",
    element:<WebShow/>
  },
  {
    path:"/anime",
    element:<Anime/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },

  {
    path:"/privacy",
    element:<PrivacyPolicy/>
  },
  {
    path:"/terms",
    element:<Terms/>
  },
  {
    path:"/cookie",
    element:<Cookies/>
  },
  {
    path:"/help",
    element:<Help/>
  }


])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Rout} />
)
