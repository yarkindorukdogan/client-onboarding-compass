import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import IntranetGuide from './pages/IntranetGuide';
import SoftwareGuide from './pages/SoftwareGuide';
import NotFound from './pages/NotFound';
import { ThemeProvider } from "@/components/ThemeProvider"
import PythonSetup from "./pages/PythonSetup";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-react-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intranet-guide" element={<IntranetGuide />} />
          <Route path="/software-downloads" element={<SoftwareGuide />} />
          <Route path="/python-setup" element={<PythonSetup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
