import React, { useEffect, useState } from "react";
import Navigation from "../../navigation/Navigation";
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../../../assets/images/home/carousel-img-1.png'
import img2 from '../../../assets/images/home/carousel-img-2.jpg'
import img3 from '../../../assets/images/home/carousel-img-3.jpg'
import img4 from '../../../assets/images/home/carousel-img-4.jpg'


export default function HomeCarousel(){

    const images = [
        img1,
        img2,
        img3,
        img4
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(true); // Trigger fade-out
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(false); // Trigger fade-in
        }, 350); // Match the CSS transition duration
      }, 5000); // Change image every 10 seconds
  
      return () => clearInterval(interval);
    }, [images.length]);

    return(
        <div 
            style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]})` 
            }}
            className={`background ${fade ? 'fade' : ''} home-carousel-bg bg-img pb-4`}
        >
            <div className="bg-transparent mb-5 pb-5">
                <Navigation />
            </div>

            <div 
                style={{
                    borderBottom: '2px solid #96969652'
                }}
                className="p-lg-5 p-md-4 p-4"
            >
                <h1
                    style={{
                        lineHeight: '60px'
                    }}
                    className="m-0 p-0 w-50 font-family-source-sans-pro fw-600 txt-FFF txt-48 mb-4"
                >
                    University Of Calabar Teaching Hospital
                </h1>

                <p className="m-0 p-0 fw-600 source-sans-pro txt-FFF txt-30 mb-2">
                    Service Integrity Empathy, Innovation 
                </p>

                <div className="d-lg-flex d-md-flex d-block align-items-center mb-5">
                    <button
                        style={{
                            borderRadius: '30px'
                        }}
                        className="d-flex mb-lg-0 mb-md-0 mb-2 align-items-center justify-content-between px-2 py-1 bg-FFF"
                    >
                        <p className="m-0 p-0 mx-1 fw-600 font-family-source-sans-pro txt-15 txt-000">
                            Book an appointment
                        </p>
                        <div style={{ paddingBottom: '4px', paddingTop: '1px' }} className="px-2 rounded-circle bg-2CAEED">
                            <FaArrowRight color="#FFF" size={15} />
                        </div>
                    </button>
                    <button
                        style={{
                            borderRadius: '30px',
                            border: '1px solid #FFF'
                        }}
                        className="d-flex mx-lg-2 mx-md-2 mx-0 align-items-center justify-content-between px-2 py-1 bg-transparent"
                    >
                        <p className="m-0 p-0 mx-1 fw-600 font-family-source-sans-pro txt-15 txt-FFF">
                            More news
                        </p>
                        <div style={{ paddingBottom: '4px', paddingTop: '1px' }} className="px-2 rounded-circle bg-2CAEED">
                            <FaArrowRight color="#FFF" size={15} />
                        </div>
                    </button>                        
                </div>

                <p 
                    style={{
                        lineHeight: '19.63px'
                    }}
                    className="w-lg-50 w-md-50 w-100 m-0 p-0 fw-600 txt-FFF font-family-source-sans-pro"
                >
                    Welcome to the University of Calabar Teaching Hospital, where we are committed to delivering world-class healthcare services to our community. With a strong legacy of excellence and an unwavering dedication to your well-being, we invite you to discover the transformative impact of healthcare done right.
                </p>
            </div>
        </div>        
    )
}