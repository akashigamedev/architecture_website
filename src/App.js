import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer.js";
import Nav from "./components/nav/Nav.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.js";
import About from "./pages/about/About.js";
import Services from "./pages/services/Services.js";
import Career from "./pages/career/Career.js";
import Contact from "./pages/contact/Contact.js";
import { DarkModeProvider } from "./contexts/DarkModeContext.js";


function App() {
  return (
    <Router>

      <DarkModeProvider>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/architecture_website/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
