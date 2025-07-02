import React, {useEffect, useRef} from 'react';
import {useState} from "react";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
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
        return () => removeEventListener('keydown', handleKeyDown);
    },[]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === modalRef.current) {
            setIsFullScreen(false);
        }

    }

  return (
    <div className="carousel-container flex flex-col items-center relative w-full max-w-3xl mx-auto mt-6">
    <div className="relative">
        <img src={images[imageIndex]}
             onClick={()=>setIsFullScreen(true)}
             alt=""
             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow"
        />
        <button onClick={() => {goToNext()}}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </button>
        <button onClick={() => {goToPrev()}}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
    </div>
        {isFullScreen && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
                 ref = {modalRef}
                 onClick={handleOverlayClick}
            >
                <img src={images[imageIndex]} alt="" className="max-w-screen max-h-screen object-contain" />

                <button onClick={goToPrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded">‹</button>
                <button onClick={goToNext} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl bg-black bg-opacity-30 hover:bg-opacity-50 p-2 rounded">›</button>
                <button onClick={() => setIsFullScreen(false)} className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-30 hover:bg-opacity-50 p-1 rounded">×</button>
            </div>
        )}
    </div>
  );
}

export default ImageCarousel;