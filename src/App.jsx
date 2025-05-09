// src/App.jsx
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
  // Set dark mode as default theme
  if (!document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", "dark-mode");
  }

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

  return <RouterProvider router={router} />;
}

export default App;
