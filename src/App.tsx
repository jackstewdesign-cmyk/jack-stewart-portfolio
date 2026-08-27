import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CaseStudyPage from "./pages/CaseStudyPage";
import HomePage from "./pages/HomePage";
import ScrollToHash from "./ScrollToHash";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-canvas">
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
    </div>
  );
}

export default App;
