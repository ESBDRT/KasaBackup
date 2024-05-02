import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Error404 from './pages/404.jsx';
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
    path: '/404',
    element: <Error404/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;