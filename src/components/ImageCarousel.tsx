import React, {useEffect, useRef} from 'react';
import {useState} from "react";
import {faArrowLeft, faArrowRight,faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images}) => {

    const [imageIndex, setImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    function goToNext() {
        setImageIndex((prev)=>(prev+1) % images.length);
    }
    function goToPrev() {
        setImageIndex((prev)=>(prev-1 + images.length) % images.length);
    }

    useEffect(() => {

        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Escape') {
                setIsFullScreen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);


        let interval: number | undefined;

        if (!isFullScreen){
            interval = setInterval(() =>{
                setImageIndex((prev)=>(prev+1) % images.length);
            },3000);
        }
        return () => {
            if (interval) clearInterval(interval);
            document.removeEventListener('keydown', handleKeyDown);
        }
    },[images.length,isFullScreen]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalRef.current) {
            setIsFullScreen(false);
        }

    }

  return (
      <div className="flex flex-col items-center w-full mx-auto mt-6 relative mb-10">
          {/* Carousel Container */}
          <div className="flex justify-center relative w-auto h-auto overflow-hidden rounded-lg shadow-md border-2 border-black ">
              {/* Main Image */}
              <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${imageIndex * 100}%)` }}
              >
                  {images.map((src, i) => (
                      <img
                          key={i}
                          src={src}
                          alt=""
                          className="w-full flex-shrink-0 object-cover h-[500px]"
                          onClick={() => setIsFullScreen(true)}
                      />
                  ))}
              </div>

              {/* Left Button */}
              <button
                  onClick={goToPrev}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 shadow"
              >
                  <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              </button>

              {/* Right Button */}
              <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 shadow"
              >
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
              </button>
          </div>

          {/* Fullscreen Mode */}
          {isFullScreen && (
              <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.90)]"
                  ref={modalRef}
                  onClick={handleOverlayClick}
              >
                  <img
                      src={images[imageIndex]}
                      alt=""
                      className="max-w-200 max-h-200 object-contain"
                  />

                  {/* Prev Button */}
                  <button
                      onClick={goToPrev}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-5xl bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded"
                  >
                      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  </button>

                  {/* Next Button */}
                  <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-5xl bg-white bg-opacity-30 hover:bg-opacity-50 p-2 rounded"
                  >
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </button>

                  {/* Close Button */}
                  <button
                      onClick={() => setIsFullScreen(false)}
                      className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded"
                  >
                      <FontAwesomeIcon icon={faX} size="lg" />
                  </button>
              </div>
          )}
      </div>
  );
}

export default ImageCarousel;