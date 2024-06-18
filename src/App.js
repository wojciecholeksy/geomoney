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
import Dashboard_workers from "./components/dashboard/Dashboard_workers";
import Dashboard_clients from "./components/dashboard/Dashboard_clients";
import Dashboard_banks from "./components/dashboard/Dashboard_banks";
import Details_workers from "./components/dashboard/Details_workers";
import Details_banks from "./components/dashboard/Details_banks";
import Details_clients from "./components/dashboard/Details_clients";
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
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard/workers",
    element: <Dashboard_workers />,
  },
  {
    path: "/services/dashboard/clients",
    element: <Dashboard_clients />,
  },
  {
    path: "/services/dashboard/banks",
    element: <Dashboard_banks />,
  },
  {
    path: "/services/dashboard/workers/details/:id",
    element: <Details_workers />,
  },
  {
    path: "/services/dashboard/clients/details/:id",
    element: <Details_clients />,
  },
  {
    path: "/services/dashboard/banks/details/:id",
    element: <Details_banks />,
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

// import "./App.css";
// import Home from "./components/home/Home";
// import Services from "./components/services/Services";
// import About from "./components/about/About";
// import Map from "./components/map/Map";
// import Dashboard_workers from "./components/dashboard/Dashboard_workers";
// import Dashboard_clients from "./components/dashboard/Dashboard_clients";
// import Dashboard_banks from "./components/dashboard/Dashboard_banks";
// import Details_workers from "./components/dashboard/Details_workers";
// import Details_banks from "./components/dashboard/Details_banks";
// import Details_clients from "./components/dashboard/Details_clients";

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
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/services/map",
//     element: <Map />,
//   },
//   {
//     path: "/services/dashboard/workers",
//     element: <Dashboard_workers />,
//   },
//   {
//     path: "/services/dashboard/clients",
//     element: <Dashboard_clients />,
//   },
//   {
//     path: "/services/dashboard/banks",
//     element: <Dashboard_banks />,
//   },
//   {
//     path: "/services/dashboard/workers/details/:id",
//     element: <Details_workers />,
//   },
//   {
//     path: "/services/dashboard/clients/details/:id",
//     element: <Details_clients />,
//   },
//   {
//     path: "/services/dashboard/banks/details/banks/:id",
//     element: <Details_banks />,
//   },
//   {
//     path: "*",
//     element: <div>404 Not Found</div>,
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
