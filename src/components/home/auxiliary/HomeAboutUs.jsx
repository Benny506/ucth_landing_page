import React from "react";
import visionImg from '../../../assets/images/home/about-us-vision.png'
import missionImg from '../../../assets/images/home/about-us-mission.png'
import corevaluesImg from '../../../assets/images/home/about-us-core-values.png'


const aboutUsInfo = [
    {
        img: visionImg,
        title: 'Our Vision',
        text: 'We aspire to lead the way in quaternary healthcare provision, delivering top-tier specialist-led medical and ancillary services across West and Central Africa, extending our reach beyond borders.'
    },
    {
        img: missionImg,
        title: 'Our Mission',
        text: 'We are dedicated to revitalizing UCTH, Calabar through comprehensive developmental initiatives, an inspired workforce, and strategic partnerships. Utilizing cutting-edge technology, our goal is to provide exceptional, affordable, and compassionate care within a disciplined and empathetic environment.'
    },
    {
        img: corevaluesImg,
        title: 'Our Core Values',
        text: 'Our hospital is guided by core values that include integrity, commitment, confidentiality, empathy, friendliness, and discipline, ensuring exceptional care and trust for all who seek our services.'
    }
]


export default function HomeAboutUs(){

    const displayAboutUsInfo = aboutUsInfo.map((info, i) => {
        const { img, title, text } = info

        return (
            <div
                key={i}
                className="col-lg-4 col-md-12 col-12 px-lg-2 px-md-0 px-0 mb-lg-0 mb-md-3 mb-3"
            >
                <div
                    className="p-3"
                    style={{
                        border: '1px solid #FFFFFF66',
                        boxShadow: '0px 4px 4px #00000040',
                        borderRadius: '16px',
                        minHeight: '342px'
                    }}
                >
                    <div className="d-flex align-items-center justify-content-center mb-2">
                        <div>
                            <img src={img} className="" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <h2 className="m-0 p-0 txt-28 txt-2CAEED fw-600 font-family-source-sans-pro">
                            { title }
                        </h2>
                    </div>
                    <p className="m-0 p-0 txt-15 fw-400 txt-000 font-family-source-sans-pro">
                        { text }
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className="">
            <div 
                className="p-lg-5 p-md-4 p-4 d-lg-flex d-md-block d-block align-items-stretch justify-content-center"
            >
                { displayAboutUsInfo }
            </div>

            <div
                className="bg-2CAEED w-100 p-lg-5 p-md-4 p-4"
            >
                <h4 className="m-0 p-0 mb-3 txt-000 fw-600 txt-20 font-family-source-sans-pro text-center">
                    Our Mantra & our Commitment 2019-2027
                </h4>
                <h1 className="m-0 p-0 txt-25 text-wrap text-center txt-FFF fw-600 font-family-source-sans-pro mb-2">
                    REBUILD, RESTORE, REBOOT, ....AND REBRAND.
                </h1>
                <p className="m-0 p-0 txt-15 text-center fw-400 txt-FFF font-family-source-sans-pro">
                    Together, we embrace the journey of rejuvenation, instilling renewed purpose and vitality into our healthcare landscape.
                </p>
            </div>
        </div>
    )
}