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
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/writer" element={<Writer />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/data" element={<Data />} />
        <Route path="/articles" element={<Articles />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
