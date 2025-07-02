import React from 'react';
import ImageCarousel from "../components/ImageCarousel.tsx";
import chairDentist from "../images/kreslo_dentist.png"
import Mouth from "../images/mouth.png"

const GallerySection: React.FC = () => {
  return (
      <section className="gallery-section">
          <h1 className="about-title">Galéria</h1>
          <ImageCarousel images={[chairDentist,Mouth]}/>
      </section>

  );
};

export default GallerySection;