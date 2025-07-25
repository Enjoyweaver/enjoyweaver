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
import Articles from "./pages/Articles";
import Writer from "./pages/Writer";

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
        <Route path="/Writer" element={<Writer />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/data" element={<Data />} />
        <Route path="/articles" element={<Articles />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
