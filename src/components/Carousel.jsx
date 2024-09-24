import React, { useState, useEffect, useRef } from "react";
import "../css/Carousel.css";

const Carousel = ({ ads, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(true);
    const slideinterval = useRef(null);

    const moveSlide = (step) => {
        const totalSlides = ads.length;
        setCurrentIndex((prevIndex) => (prevIndex + step + totalSlides) % totalSlides);

    };
    
    const startSlide = () => {
        if (isSliding) {
            slideinterval.current = setInterval(() => {
                moveSlide(1);
            }, interval);
        }
    };

    const stopSlide = () => {
        if (slideinterval.current) {
            clearInterval(slideinterval.current);
        }
    };

    const handleClick = (step) => {
        stopSlide(); 
        setIsSliding(false); 
        moveSlide(step); 
    };


    // useEffect(() => {
    //     const slideinterval = setInterval(() => {
    //         moveSlide(1);
    //     },interval);

    //     return () => {
    //         clearInterval(slideinterval);
    //     };
    // }, [currentIndex, interval]);

    useEffect(() => {
        startSlide();
        return () => {
            stopSlide();
        };
    }, [currentIndex, isSliding, interval]);

    return(
        <div className="carousel">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {ads.map((ad, index) =>(
                    <div className="carousel-item" key={index}>
                        <img src={ad.image} alt={`Ad ${index + 1}`} />
                        <p>{ad.description}</p>
                    </div>
                ))}
            </div>
            <button className="button12 prev" onClick={() => handleClick(-1)}>&#10094;</button>
            <button className="button12 next" onClick={() => handleClick(1)}>&#10095;</button>
        </div>
    );
};

export default Carousel;