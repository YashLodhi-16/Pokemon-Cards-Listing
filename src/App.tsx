import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
