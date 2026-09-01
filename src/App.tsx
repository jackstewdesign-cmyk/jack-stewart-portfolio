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
      {/* Page content is capped at 1860px and centred; beyond that the extra
          width becomes side margin (canvas-coloured, matching body). The nav
          bar above stays full-bleed so its border/background reach the edges. */}
      <div className="w-full max-w-[1860px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
