import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex flex-col">
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
