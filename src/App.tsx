import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./sections/HomeSection.tsx";
import AboutSection from "./sections/About.tsx";
import Services from "./sections/Services.tsx";
import Footer from "./components/Footer";
import LocationSection from "./sections/LocationSection.tsx";
import BeforeAfter from "./components/BeforeAfter.tsx";
import './App.css'
import ReservationPage from "./pages/ReservationPage.tsx";
import ReservationSuccess from "./pages/ReservationSuccess.tsx";
import GallerySection from "./sections/GallerySection.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <div className="main_container">
                <div className="header_section">
                    <Header />
                </div>
                <Routes>
                    <Route
                        path="/hportodent"
                        element={
                            <>
                                <div id="domov">
                                    <HomeSection />
                                </div>
                                <div id="o-nas" className="about_section">
                                    <AboutSection/>
                                </div>
                                <div id="sluzby"  className="services_section">
                                    <Services/>
                                </div>
                                <div id="premeny" className="before-after_section">
                                    <BeforeAfter/>
                                </div>
                                <div id="kontakt" className="location_section">
                                    <LocationSection/>
                                </div>
                                <div id="galeria" className="home_section">
                                    <GallerySection/>
                                </div>
                            </>
                        }
                    />
                    <Route path="/hportodent/o-nas" element={<AboutSection />} />
                    <Route path="/hportodent/sluzby" element={<Services />} />
                    <Route path="/hportodent/premeny" element={<BeforeAfter/>} />
                    <Route path="/hportodent/kontakt" element={<LocationSection />} />
                    <Route path="/hportodent/galeria" element={<GallerySection />} />
                    <Route path="/hportodent/rezervacia" element={
                        <div id="rezervacia" className="home_section">
                        <ReservationPage />
                        </div>
                    } />
                    <Route path="/hportodent/rezervacia/success" element={
                        <div id="rezervacia-success" className="home_section">
                            <ReservationSuccess />
                        </div>
                    } />
                </Routes>
                <div className="services_section">
                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
