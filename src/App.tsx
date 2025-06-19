
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Destinations from "./pages/Destinations"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Arusha from "./pages/Arusha"
import Kilimanjaro from "./pages/Kilimanjaro"
import Zanzibar from "./pages/Zanzibar"
import TourPackages from "./pages/TourPackages"
import TravelTips from "./pages/TravelTips"
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/arusha" element={<Arusha />} />
            <Route path="/kilimanjaro" element={<Kilimanjaro />} />
            <Route path="/zanzibar" element={<Zanzibar />} />
            <Route path="/tour-packages" element={<TourPackages />} />
            <Route path="/travel-tips" element={<TravelTips />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
