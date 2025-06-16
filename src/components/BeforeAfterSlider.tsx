import React, { useRef, useState } from 'react';
import '../styles/BeforeAfterSlider.css';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, alt }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className="slider-container" ref={containerRef}>
            <img src={beforeImage} alt={alt || 'Before'} className="image" />
            <img
                src={afterImage}
                alt={alt || 'After'}
                className="image image-after"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            />
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="slider-input"
            />
        </div>
    );
};

export default BeforeAfterSlider;
