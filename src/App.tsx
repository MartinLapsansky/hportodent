import Header from "./components/Header.tsx";
import HomeSection from "./components/HomeSection.tsx";
import './App.css'
import AboutSection from "./components/About.tsx";
import Services from "./components/Services.tsx";

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
      </div>
  )
}

export default App
