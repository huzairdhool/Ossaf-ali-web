import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Property = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(()=>{
        const updateCardsToShow=()=>{
            if(window.innerWidth>= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize',updateCardsToShow);
            return()=> window.removeEventListener('resize',updateCardsToShow);
    },[])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container bg-gray-200 mx-auto py-4 pt-20 mb-0 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Property">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-blue-500 text-center">
                Available <span className="decoration-1 font-light">Now</span>
            </h2>
            <p className="text-black max-w-80 text-center mb-8 mt-2 mx-auto">
                "According to your needs & demands – Available in different sizes."
            </p>

            {/* buttons */}
            <div className="flex justify-end items-center mb-8">
                <button
                    onClick={prevProject} 
                    className="p-3 bg-gray-200 rounded mr-2 hover:cursor-pointer" aria-label="Show Previous"
                >
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 bg-gray-200 rounded mr-2 hover:cursor-pointer" aria-label="Show Next"
                >
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* slider */}
            <div className="overflow-hidden">
                <div
                    className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4">
                            <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                    <p className="text-gray-500 text-sm">
                                        {project.price} <span>|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Property;

