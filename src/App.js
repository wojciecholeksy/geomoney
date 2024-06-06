// import "./App.css";
// import Home from "./components/home/Home";
// import Services from "./components/services/Services";
// import About from "./components/about/About";
// import Map from "./components/map/Map";
// import Dashboard from "./components/dashboard/Dashboard";
// import Details from "./components/dashboard/Details";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/home/about",
//     element: <About />,
//   },
//   {
//     path: "/services/map",
//     element: <Map />,
//   },
//   {
//     path: "/services/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/services/dashboard/:id",
//     element: <Details />,
//   },
// ]);
// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Map from "./components/map/Map";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details";
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
    path: "/home/about",
    element: <About />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/services/dashboard/details/:id",
    element: <Details />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
