import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Map from "./components/map/Map";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  // {
  //   path: "/banks",
  //   element: <Banks />,
  // },
  // {
  //   path: "/clients",
  //   element: <Clients />,
  // },
  // {
  //   path: "/workers",
  //   element: <Workers />,
  // },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
