import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import Footer from "./Components/Footer";
import Movies from "./Components/movies";
import AddMovies from "./Components/addMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import PageNotFound from "./Components/404";

function App() {
  return (
    <div className="App">

      {/* <Navbar />
      <Home />
      <Movies/>
      <Footer /> */}

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route element={<Home />} path="/" />
          <Route element={<Movies />} path="/movies" />
          <Route element={<AddMovies />} path="/addMovies" />
          <Route element={<PageNotFound />} path="*" />

        </Routes>

        <Footer />

      </BrowserRouter>


    </div>
  )
}
export default App
