import React, {Suspense, useEffect, useState} from 'react';

import {useInView} from "react-intersection-observer";

const LazyImageCarousel = React.lazy((() => import ("../components/ImageCarousel")));

const GallerySection: React.FC = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [images,setImages] = useState<string[] | null>(null);

    useEffect(() => {
        if(!images && inView){
            const loadImages = async () => {
                const chairDentist = (await import('../images/kreslo_dentist.png')).default;
                const Mouth =  (await import('../images/mouth.png')).default;
                setImages([chairDentist,Mouth]);
            }
            loadImages();
        }
    },[images, inView]);

      return (
          <section ref={ref} className={`flex w-full flex-col h-full m-auto justify-center items-center transition-all duration-2000 ease-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
              <h2 className="about-title bg-[#0c7cd1] w-fit rounded-[15px] border-4 border-black px-8 py-5 text-white">Galéria</h2>
              {images && inView && (
                  <Suspense fallback={<div>Loading...</div>}>
                      <LazyImageCarousel images={images} />
                  </Suspense>
              )}
          </section>

      );
    };

export default GallerySection;