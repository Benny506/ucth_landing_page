import React from "react";
import img from '../../../assets/images/home/hero-section-1-img.png'


export default function HomeHeroSection1(){
    return (
        <div className="p-lg-5 p-md-4 p-4 d-lg-flex d-md-block d-block align-items-start justify-content-between">
            <div className="col-lg-5 col-md-12 col-12">
                <div className="col-lg-12 col-md-12 col-12 mb-3">
                    <img src={img} className="col-lg-12 col-md-12 col-12" />
                </div>
                <h4 className="m-0 p-0 fw-400 font-family-source-sans-pro txt-18 txt-000 mb-2">
                    Professor Ikpeme Asanye Ikpeme
                </h4>
                <h2 className="m-0 p-0 fw-400 font-family-source-sans-pro txt-15 txt-2CAEED mb-2">
                    CHIEF MEDICAL DIRECTOR
                </h2>
            </div>
            <div className="col-lg-7 col-md-12 col-12 px-lg-4 px-md-0 px-0">
                <p className="m-0 p-0 txt-000 fw-400 txt-15 font-family-source-sans-pro">
                    Welcome to the University of Calabar Teaching Hospital, a distinguished institution where healthcare, education, and research converge to create a vibrant and dynamic community. As you step into our modern and well-equipped facility, you are entering a hub of excellence dedicated to advancing medical knowledge, fostering the development of future healthcare leaders, and providing exceptional patient care.
                    <br /> <br />
                    At the heart of our mission is a commitment to delivering compassionate and patient-centered healthcare. Our skilled and dedicated departments and staff work tirelessly to ensure that each patient receives the highest standard of care. As a teaching hospital, we take pride in nurturing the next generation of healthcare professionals, providing them with a rich learning environment that combines hands-on experience with cutting-edge medical practices.
                    <br /> <br />
                    The University of Calabar Teaching Hospital is not only a center for education but also a thriving hub for groundbreaking research. Our researchers and scholars collaborate to push the boundaries of medical science, contributing to innovations that impact healthcare globally. Whether you are seeking top-notch medical care, pursuing an education in the healthcare field, or engaging in transformative research, we extend a warm welcome to the University of Calabar Teaching Hospital—a place where excellence, compassion, and innovation come together to shape the future of healthcare.
                </p>
            </div>
        </div>
    )
}