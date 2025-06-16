import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LocationSection from "./components/LocationSection";
import BeforeAfter from "./components/BeforeAfter.tsx";
import './App.css'
import ReservationPage from "./pages/ReservationPage.tsx";

function App() {
    return (
        <Router>
            <div className="main_container">
                <div className="header_section">
                    <Header />
                </div>
                <Routes>
                    <Route
                        path="/hportodent"
                        element={
                            <>
                                <div id="domov" className="home_section">
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
                            </>
                        }
                    />
                    <Route path="/hportodent/o-nas" element={<AboutSection />} />
                    <Route path="/hportodent/sluzby" element={<Services />} />
                    <Route path="/hportodent/premeny" element={<BeforeAfter/>} />
                    <Route path="/hportodent/kontakt" element={<LocationSection />} />
                    <Route path="/hportodent/rezervacia" element={
                        <div id="rezervacia" className="home_section">
                        <ReservationPage />
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
