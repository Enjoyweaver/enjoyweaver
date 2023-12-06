import "./App.css";
import Home from "./pages/Home";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Showcase from "./pages/Showcase";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <header className="w-100">
        <nav className="flex justify-between p-4 items-center flex-row top-0">
          <h1 className="text-lg font-bold">Schedule Your Tasks</h1>
          <div>
            <NavLink className="mr-5" to="/">
              Home
            </NavLink>
          </div>
        </nav>
      </header>
    </RouterProvider>
  );
}

export default App;
