import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

// Lazy load components with preload
const Navbar = lazy(() => import('./components/Navbar'));

// Lazy load pages with preload
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Admission = lazy(() => import('./pages/Admission'));
const Contact = lazy(() => import('./pages/Contact'));
const Courses = lazy(() => import('./pages/Courses'));
const Gallery = lazy(() => import('./pages/Gallery'));
const CampusGallery = lazy(() => import('./pages/gallery/CampusGallery'));
const ClassroomGallery = lazy(() => import('./pages/gallery/ClassroomGallery'));
const EventsGallery = lazy(() => import('./pages/gallery/EventsGallery'));
const LaboratoryGallery = lazy(
  () => import('./pages/gallery/LaboratoryGallery')
);
const SportsGallery = lazy(() => import('./pages/gallery/SportsGallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Loading fallback component
const LoadingFallback = () => (
  <div
    className="min-h-screen flex items-center justify-center"
    role="status"
    aria-label="Loading"
  >
    <div className="animate-pulse text-xl text-gray-500">Loading...</div>
  </div>
);

// Navbar loading fallback
const NavbarFallback = () => (
  <div
    className="h-16 bg-white shadow-md animate-pulse"
    role="status"
    aria-label="Loading navigation"
  />
);

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header role="banner">
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
      </header>
      <main role="main" className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/campus" element={<CampusGallery />} />
            <Route path="/gallery/classroom" element={<ClassroomGallery />} />
            <Route path="/gallery/laboratory" element={<LaboratoryGallery />} />
            <Route path="/gallery/sports" element={<SportsGallery />} />
            <Route path="/gallery/events" element={<EventsGallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <AppContent />
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
