import BeforeAfterSlider from "../components/BeforeAfterSlider";
import whiteSmile from '../images/white smile.jpeg';
import yellowSmile from '../images/yellow tooths.png';


const BeforeAfter = () => {
  return (
      <div className="before-after_section">
          <h2 className="about-title">Premeny – pred a po</h2>
          <div className="changes_tooth">
              <BeforeAfterSlider beforeImage={whiteSmile} afterImage={yellowSmile} alt="Premena chrupu" />
              <BeforeAfterSlider beforeImage={whiteSmile} afterImage={yellowSmile} alt="Premena chrupu" />
          </div>
      </div>
  );
};

export default BeforeAfter;