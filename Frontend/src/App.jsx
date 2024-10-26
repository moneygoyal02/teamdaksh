/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'

// layouts and pages
import Home from './pages/Home/Home';
import RootLayout from './layouts/RootLayout';
import About from './pages/About/About';
import Achievements from './pages/Achievements/Achievements';
import Gallery from './pages/Gallery/Gallery';
import OurTeam from './pages/Our Team/Team';
import Sponsor from './pages/Sponsor Us/Sponsor';
import Contact from './pages/Contact Us/Contact';
import AdminPanel from './pages/Admin/Admin';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About/>}/>
      <Route path="achievements" element={<Achievements/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="team" element={<OurTeam/>}/>
      <Route path="sponsor" element={<Sponsor/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="admin" element={<AdminPanel/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;