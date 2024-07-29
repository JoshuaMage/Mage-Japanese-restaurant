import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import Rootlayout from "./component/Rootlayout";
import Homepage from "./pages/Home.jsx";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Guests from "./pages/Guests";
import Story from "./pages/Story";
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {
    path: "/MageRestaurant",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "Menu", element: <Menu /> },
      { path: "Booking", element: <Booking /> },
      { path: "Guests", element: <Guests /> },
      { path: "Story", element: <Story /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
