
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import Under18 from "./pages/Under18";
import YoungAdults from "./pages/YoungAdults";
import Adults from "./pages/Adults";
import Reorientation from "./pages/Reorientation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/under-18" element={<Under18 />} />
          <Route path="/young-adults" element={<YoungAdults />} />
          <Route path="/adults" element={<Adults />} />
          <Route path="/reorientation" element={<Reorientation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
