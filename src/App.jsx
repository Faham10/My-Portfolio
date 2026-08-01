import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationPage from "./pages/CertificationPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#131B2E",
            color: "#E7EAF3",
            border: "1px solid rgba(148,163,184,0.15)",
            fontFamily: "var(--font-body)",
          },
        }}
      />
    </div>
  );
}

export default App;
