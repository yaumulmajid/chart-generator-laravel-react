import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import Preview from './pages/Preview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/preview",
    element: <Preview />
  }
])

function App() {
  return <RouterProvider router={router} />;

}

export default App
