
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import Under18 from "./pages/Under18";
import YoungAdults from "./pages/YoungAdults";
import Adults from "./pages/Adults";
import Reorientation from "./pages/Reorientation";
import Chatbot from "./pages/Chatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
          <Route path="/partners" element={<Layout><Partners /></Layout>} />
          <Route path="/under-18" element={<Layout><Under18 /></Layout>} />
          <Route path="/young-adults" element={<Layout><YoungAdults /></Layout>} />
          <Route path="/adults" element={<Layout><Adults /></Layout>} />
          <Route path="/reorientation" element={<Layout><Reorientation /></Layout>} />
          <Route path="/chatbot" element={<Layout><Chatbot /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
