import React from "react";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return (
        <div>
            <div className="p-lg-5 p-md-4 p-4 mb-3 d-lg-flex d-md-block d-block align-items-start justify-content-between">
                <div className="col-lg-3 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-lg-4 mb-5">
                    <h1 className="m-0 p-0 mb-2 font-family-source-sans-pro fw-700 txt-000 txt-38">
                        UTCH    
                    </h1>
                    <p className="m-0 p-0 mb-4 txt-303030 font-family-source-sans-pro fw-600 txt-15">
                        Our driving objective at UCTH is to become a world class quartenary hospital, using cutting edge technology and highly developed human resources to render excellent medical care/services to the good people of Cross River State and beyond in-order to markedly reduce the number of patients seeking medical tourism abroad.
                    </p>
                    <div style={{ gap: '15px' }} className="d-flex align-items-center">
                        <FaTwitter size={18} color="#4f4f4f" className="clickable" />
                        <RiInstagramFill size={18} color="#4f4f4f" className="clickable" />
                        <FaFacebook size={18} color="#4f4f4f" className="clickable" />
                        <FaLinkedin size={18} color="#4f4f4f" className="clickable" />
                    </div>
                </div>

                <div className="col-lg-3 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-lg-4 mb-5">
                    <h1 className="m-0 p-0 mb-4 font-family-source-sans-pro txt-2CAEED fw-600 txt-25">
                        Contact Us
                    </h1>
                    <p className="m-0 p-0 font-family-source-sans-pro txt-303030 fw-600 txt-15">
                        <span className="txt-17 fw-700">
                            Addresses:
                        </span>
                        <br />
                        <span>
                            PERMANENT SITE University of Calabar Teaching Hospital (UCTH) UNICAL Hotel RoadOff Airport Road by CUDA Calabar
                        </span>
                        <br /> 
                        <br />
                        <span>
                            OUTSTATION HEALTH FACILITIES Federal Secretariat Clinic, Federal Secretariat Murtala Mohammed Highway, Calabar Comprehensive Health Centre, Okoyong Odukpani LGA Liaison Office, Abuja
                        </span>
                        <br />
                        <br />
                        <span className="txt-17 fw-700">
                            Phones: 
                        </span>
                        <br />
                        <span>
                            08066722346, 08024310194 08025966923, 08021236801
                        </span>
                    </p>
                </div>

                <div className="col-lg-5 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-lg-4 mb-5">
                    <div className="d-flex flex-column align-items-lg-end align-items-md-start align-items-start mb-3">
                        <h1 className="m-0 p-0 mb-4 font-family-source-sans-pro txt-2CAEED fw-600 txt-25">
                            Quick Links
                        </h1>  
                        <p className="m-0 p-0 mb-3 font-family-source-sans-pro clickable txt-303030 fw-600 txt-15">
                            ABOUT US
                        </p>
                        <p className="m-0 p-0 mb-3 font-family-source-sans-pro clickable txt-303030 fw-600 txt-15">
                            CMID
                        </p>
                        <p className="m-0 p-0 mb-3 font-family-source-sans-pro clickable txt-303030 fw-600 txt-15">
                            FAQs
                        </p>
                        <p className="m-0 p-0 mb-3 font-family-source-sans-pro clickable txt-303030 fw-600 txt-15">
                            BOARD
                        </p> 
                        <p className="m-0 p-0 mb-3 font-family-source-sans-pro clickable txt-303030 fw-600 txt-15">
                            MANAGEMENT TEAM
                        </p>                                          
                    </div>
                    <div>
                        <h1 className="m-0 p-0 mb-2 font-family-source-sans-pro txt-2CAEED fw-600 txt-25">
                            Our Newsletter
                        </h1>                      
                        <input 
                            className="px-2 py-2 mb-1 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                            placeholder="Email"
                        />   
                        <button 
                            style={{
                                borderRadius: '8px'
                            }}
                            className="font-family-source-sans-pro p-3 bg-2CAEED txt-FFF txt-15 fw-400 text-center w-100"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-2CAEED p-3">
                <p className="m-0 p-0 text-center font-family-source-sans-pro txt-FFF fw-600 txt-15">
                    © Copyright 2023 UCTH ICT. All rights reserved
                </p>
            </div>
        </div>
    )
}