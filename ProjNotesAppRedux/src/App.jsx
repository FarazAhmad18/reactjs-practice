import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      {/* <h1 className="text-red-300">Hello</h1> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
