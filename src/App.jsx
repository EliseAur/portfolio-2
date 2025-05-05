import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
