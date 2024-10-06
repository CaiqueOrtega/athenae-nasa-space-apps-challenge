import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import planetData from "../../data/home/data.json";
import moonImage from "../../assets/images/planets/moon.png";
import { useNavigate } from "react-router-dom";

function PlanetSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMouseOverMoon, setIsMouseOverMoon] = useState(false); 
    const maxHeight = Math.max(...planetData.map(planet => planet.height));
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <>
            <Slider {...settings}>
                {planetData.map((planet, index) => {
                    const centerIndex = (currentSlide + 1) % planetData.length;
                    const isCenterSlide = index === centerIndex;

                    return (
                        <div key={planet.name} className="flex flex-col items-center py-4 px-8 relative">
                            <div
                                className="rounded-lg m-2 flex flex-col items-center justify-center"
                                style={{ height: `${maxHeight}px` }}
                            >
                                <img
                                    style={{
                                        width: planet.width,
                                        height: planet.height,
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                    }}
                                    src={planet.image}
                                    alt={planet.name}
                                    className={`cursor-pointer planet-image rounded-lg transition-transform duration-150 ease-in-out ${isCenterSlide ? "scale-110" : "scale-90 grayscale"}`}
                                    onClick={() => navigate(`/${planet.name}`)} 
                                />

                                {planet.name === "Earth" && (
                                    <img
                                        src={moonImage}
                                        alt="Moon"
                                        className={`cursor-pointer absolute transform -translate-y-0 w-16 transition-transform duration-150 ease-in-out ${isCenterSlide ? "scale-100 top-20 -right-2" : "scale-90 top-28 right-6"} ${isMouseOverMoon ? "scale-125" : ""}`}
                                        onMouseEnter={() => setIsMouseOverMoon(true)} 
                                        onMouseLeave={() => setIsMouseOverMoon(false)}
                                        onClick={() => navigate(`/moon`)}
                                    />
                                )}
                                {isCenterSlide && (
                                    <h3 className={`flex justify-center text-2xl ${isCenterSlide ? "text-yellow-400 font-bold" : "text-white"}`}>
                                        {planet.name}
                                    </h3>
                                )}
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default PlanetSlider;
