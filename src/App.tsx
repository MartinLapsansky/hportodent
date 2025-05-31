import Header from "./components/Header.tsx";
import HomeSection from "./components/HomeSection.tsx";
import './App.css'
import AboutSection from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Footer from "./components/Footer.tsx";
import LocationSection from "./components/LocationSection.tsx";
import BeforeAfterSlider from "./components/BeforeAfterSlider.tsx";
import whiteSmile from './images/white smile.jpeg'
import yellowSmile from './images/yellow tooths.png'

function App() {

  return(
      <div className="main_container">
          <div className="header_section">
              <Header/>
          </div>
          <div className="home_section">
              <HomeSection/>
          </div>
          <div className="about_section">
              <AboutSection/>
          </div>
          <div className="services_section">
              <Services/>
          </div>
          <div className="before-after_section">
              <h2 className="about-title">Premeny – pred a po</h2>
              <div className="changes_tooth">
              <BeforeAfterSlider
                  beforeImage={whiteSmile}
                  afterImage={yellowSmile}
                  alt="Premena chrupu"
              />
              <BeforeAfterSlider
                  beforeImage={whiteSmile}
                  afterImage={yellowSmile}
                  alt="Premena chrupu"
              />
              </div>
          </div>
          <div className="location_section">
              <LocationSection/>
          </div>
          <div className="services_section">
              <Footer/>
          </div>

      </div>
  )
}

export default App
