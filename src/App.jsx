
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.inicio} element={<Home/> } />
        <Route path={routes.contacto} element={<Contact/> } />
        <Route path={routes.destacados} element={<Favs/> } />
        <Route path="detalles/id" element={<Detail/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
