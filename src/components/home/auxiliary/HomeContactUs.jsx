import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img from '../../../assets/images/home/contact-img-1.png'


export default function HomeContactUs(){
    return (
        <div className="p-lg-5 p-md-4 p-4 d-lg-flex d-md-block d-block align-items-start justify-content-between">
            <div className="col-lg-6 col-md-12 col-12 px-lg-3 px-md-0 px-0 mb-lg-0 mb-md-3 mb-3">
                <h1 className="m-0 p-0 txt-000 font-family-source-sans-pro fw-600 txt-35 mb-2">
                    Book An Appointment
                </h1>
                <div>
                    <div className="mb-3">
                        <input 
                            className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <div style={{ paddingRight: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Your Email"
                            />                            
                        </div>
                        <div style={{ paddingLeft: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Your Phone"
                            />                            
                        </div>                        
                    </div>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <div style={{ paddingRight: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Reason For Visit"
                            />                            
                        </div>
                        <div style={{ paddingLeft: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Preferred Date"
                            />                            
                        </div>                        
                    </div> 
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <div style={{ paddingRight: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Reason For Visit"
                            />                            
                        </div>
                        <div style={{ paddingLeft: '3px' }} className="col-lg-6">
                            <input 
                                className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                                placeholder="Preferred Time"
                            />                            
                        </div>                        
                    </div> 
                    <div className="mb-3">
                        <textarea 
                            className="px-2 py-2 home-contact-us-form-input txt-15 w-100 fw-600 txt-000 font-family-source-sans-pro"
                            placeholder="Describe Your Problem"
                            style={{
                                height: '73px'
                            }}
                        />
                    </div> 
                    <button
                        style={{
                            borderRadius: '30px',
                            border: '1px solid #FFF'
                        }}
                        className="d-flex mx-2 align-items-center justify-content-between px-2 py-1 bg-2CAEED"
                    >
                        <p className="m-0 p-0 mx-2 fw-600 font-family-source-sans-pro txt-13 txt-000">
                            Submit
                        </p>
                        <div style={{ paddingBottom: '4px', paddingTop: '1px' }} className="px-2 rounded-circle bg-FFF">
                            <FaArrowRight color="#2CAEED" size={12} />
                        </div>
                    </button>                                                         
                </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12 px-lg-3 px-md-0 px-0">
                <h1 className="m-0 p-0 px-lg-3 px-md-0 px-0 txt-000 font-family-source-sans-pro fw-600 txt-35 mb-2">
                    Contact
                </h1>
                <div className="d-lg-flex d-md-block d-block align-items-start justify-content-between">
                    <div className="col-lg-7 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-md-3 mb-3">
                        <div className="col-lg-12 col-md-12 col-12 mb-3">
                            <img src={img} className="col-lg-12 col-md-12 col-12" />
                        </div>
                        <div>
                            <p className="m-0 p-0 mb-1 txt-303030 fw-700 txt-18 font-family-source-sans-pro">
                                Phones: 
                            </p>
                            <p className="m-0 p-0 fw-600 txt-303030 txt-15 font-family-source-sans-pro">
                                08066722346, 08024310194 
                                <br />
                                08025966923, 08021236801
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-12 px-lg-2 px-md-0 px-0">
                        <p className="m-0 p-0 txt-000 fw-400 txt-15 font-family-source-sans-pro">
                            <span className="fw-600">Addresses:</span>
                            <br />
                            PERMANENT SITE
                            <br />
                            University of Calabar Teaching Hospital {'('}UCTH{')'} UNICAL Hotel RoadOff Airport Road by CUDACalabar
                            <br /> 
                            <br />
                            OUTSTATION HEALTH FACILITIES
                            <br />
                            Federal Secretariat Clinic, Federal SecretariatMurtala Mohammed Highway, CalabarComprehensive Health Centre, OkoyongOdukpani LGALiaison Office, Abuja                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}