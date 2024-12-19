import React from "react";
import img from '../../../assets/images/home/hero-section-2-img.png'
import { FaArrowRight } from "react-icons/fa6";



export default function HomeHeroSection2(){
    return(
        <div className="p-lg-5 p-md-4 p-4 d-lg-flex d-md-block d-block align-items-start justify-content-between">
            <div className="col-lg-6 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-md-3 mb-3">
                <div className="col-lg-12 col-md-12 col-12">
                    <img src={img} className="col-lg-12 col-md-12 col-12" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 px-lg-2 px-md-0 px-0">
                <h1 className="m-0 p-0 txt-000 fw-600 font-family-source-sans-pro txt-38 mb-2">
                    Patient Health Is The Highest Value In Our Work
                </h1>
                <p className="m-0 p-0 mb-5 txt-15 fw-400 txt-303030 font-family-source-sans-pro">
                    we believe that patient health is not just a value; 
                    it's our unwavering commitment. Our entire team is committed to providing 
                    the highest standard of care, because we understand that your well-being is at 
                    the heart of everything we do. We continuously strive to improve our services and exceed expectations
                </p>

                <button
                    style={{
                        borderRadius: '30px',
                        border: '1px solid #FFF'
                    }}
                    className="d-flex align-items-center justify-content-between px-2 py-1 bg-2CAEED"
                >
                    <p className="m-0 p-0 mx-2 fw-600 font-family-source-sans-pro txt-13 txt-000">
                        Learn More
                    </p>
                    <div style={{ paddingBottom: '4px', paddingTop: '1px' }} className="px-2 rounded-circle bg-FFF">
                        <FaArrowRight color="#2CAEED" size={12} />
                    </div>
                </button>                
            </div>
        </div>
    )
}