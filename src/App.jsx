import "./App.css";
import Home from "./pages/Home";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Showcase from "./pages/Showcase";
import Data from "./pages/Data";
import Resume from "./pages/Resume";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/data" element={<Data />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
