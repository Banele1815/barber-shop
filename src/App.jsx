import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";
import Terms from "./pages/Terms.jsx";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;