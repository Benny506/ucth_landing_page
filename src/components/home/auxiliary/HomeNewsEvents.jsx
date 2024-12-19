import React, { useState } from "react";
import img1 from '../../../assets/images/home/newsEvents-1.png'
import img2 from '../../../assets/images/home/newsEvents-2.png'
import img3 from '../../../assets/images/home/newsEvents-3.png'
import img4 from '../../../assets/images/home/newsEvents-4.png'


const newsEventsInfo = [
    {
        id: 0,
        img: img1,
        title: 'UNIVERSITY OF CALABAR TEACHING HOSPITAL...',
        path: '../../../assets/images/home/newsEvents-1.png'
    },
    {
        id: 1,
        img: img2, 
        title: 'Addressing Blood Transfusion Challenges: Staying...',
        path: '../../../assets/images/home/newsEvents-2.png'
    },
    {
        id: 2,
        img: img3, 
        title: 'UCTH CALABAR COMMENCES TRAINING FOCUS...',
        path: '../../../assets/images/home/newsEvents-3.png'
    },
    {
        id: 3,
        img: img4, 
        title: 'ADMISSION!! ADMISSION!!',
        path: '../../../assets/images/home/newsEvents-4.png'
    }
]


export default function HomeNewsEvents(){

    const [activeNewsEvents, setActiveNewsEvents] = useState(0)

    const { img, title } = newsEventsInfo[activeNewsEvents]

    const displayNewsEventsInfo = newsEventsInfo.map((info, i) => {
        const { img, title, id } = info

        const isActive = activeNewsEvents == id ? true : false

        const selectNewsEvent = () => setActiveNewsEvents(id)

        return (
            <div
                key={i}
                style={{
                    backgroundColor: isActive ? '#B2E6FF' : "transparent"
                }}
                onClick={selectNewsEvent}
                className="d-flex clickable align-items-center justify-content-between px-3 mb-4"
            >
                <div className="col-lg-5">
                    <img src={img} className="col-lg-12 col-md-12 col-12" />
                </div>
                <div className="col-lg-6">
                    <h2 className="m-0 p-0 font-family-source-sans-pro fw-600 txt-15 txt-000">
                        { title }
                    </h2>
                </div>
            </div>
        )
    })

    return (
        <div
            style={{
                borderBottom: '1px solid #4F4F4F'
            }}
            className=""
        >
            <div className="p-lg-5 p-md-2 p-0 bg-2CAEED d-lg-flex d-md-block d-block align-items-center justify-content-between">
                <div 
                    style={{
                        backgroundImage: `url(${img})`,
                        minHeight: '450px',
                        borderRadius: '20px'
                    }}
                    className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-lg-3 mb-3 p-lg-2 p-md-3 p-3 d-flex bg-img align-items-end justify-content-between"
                >
                    <h4 className="m-0 p-0 w-50 font-family-source-sans-pro txt-18 txt-FFF fw-400">
                        { title }
                    </h4>
                    <p className="m-0 w-25 p-0 font-family-source-sans-pro txt-FFF txt-18 fw-600">
                        Read more
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 col-12 px-lg-2 px-md-1 px-0">
                    <div                    
                        style={{
                            borderRadius: 20,
                        }}         
                        className="bg-E5F7FF py-2"
                    >
                        <div className="mb-2">
                            <div className="px-3 d-flex mb-2 align-items-center justify-content-between">
                                <h4 className="m-0 p-0 font-family-source-sans-pro txt-15 fw-600 txt-000">
                                    Highlights
                                </h4>
                                <p className="m-0 p-0 font-family-source-sans-pro txt-000 fw-600 txt-15">
                                    { newsEventsInfo.length } Updates
                                </p>
                            </div>

                            <div className="home-news-events-highlights">
                                { displayNewsEventsInfo }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-lg-5 m-md-4 m-4 py-3 px-5 home-resources-bg d-lg-flex d-md-block d-block align-items-center justify-content-between">
                <div className="mb-lg-0 mb-md-3 mb-3">
                    <h1 className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-38">
                        1000+
                    </h1>
                    <p className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-15">
                        Hospital Beds
                    </p>
                </div>
                <div className="mb-lg-0 mb-md-3 mb-3">
                    <h1 className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-38">
                        500+
                    </h1>
                    <p className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-15">
                        Regular Patients
                    </p>
                </div>
                <div>
                    <h1 className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-38">
                        800+
                    </h1>
                    <p className="m-0 p-0 text-lg-start text-md-center text-center font-family-source-sans-pro fw-600 txt-000 txt-15">
                        Expert Doctors
                    </p>
                </div>
            </div>
        </div>
    )
}