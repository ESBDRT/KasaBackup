import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Error404 from './pages/404/404.jsx';
import Host from './pages/host/host.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '*',
    element: <Error404/>
  },
  {
    path: '/host/:id',
    element: <Host/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;