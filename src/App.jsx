import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/fonts/SainteColombeLight.otf";
import "./assets/fonts/SainteColombeExtraLight.otf";
import "./assets/fonts/SainteColombe.otf";
import "./assets/fonts/SainteColombeMedium.otf";

import Navbar from "@/components/Navbar/Navbar";
import About from "@/routes/About/About";
import Home from "@/routes/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
