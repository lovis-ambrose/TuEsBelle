import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Change Router to BrowserRouter
import Index from './pages';
import OnePAge from './pages/onepage';
import Aboutus from './pages/aboutus';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import Pricing from './pages/pricing';
import Team from './pages/team';
import Testimonial from './pages/testimonial';
import Faqs from './pages/faqs';
import Blogs from './pages/blogs';
import BlogSidebar from './pages/blog-sidebar';
import BlogDetail from './pages/blog-detail';
import Login from './pages/login';
import Signup from './pages/signup';
import ResetPassword from './pages/reset-password';
import LockScreen from './pages/lock-screen';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Comingsoon from './pages/comingsoon';
import Maintenance from './pages/maintenance';
import Error from './pages/error';
import Contactus from './pages/contactus';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onepage" element={<OnePAge />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/lock-screen" element={<LockScreen />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;