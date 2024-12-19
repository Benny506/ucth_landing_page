import React from "react";
import allProfessionalsImg from '../../../assets/images/home/services-all-professionals.png'
import fullySecuredImg from '../../../assets/images/home/services-fully-secured.png'
import happyPatientsImg from '../../../assets/images/home/services-happy-patients.png'
import servicesSupportImg from '../../../assets/images/home/services-support.png'


const ourServicesInfo = [
    {
        img: allProfessionalsImg,
        title: 'All Professionals',
        text: `Our hospital is proud to have a team of highly qualified and experienced doctors, each dedicated to your health and well-being...`
    },
    {
        img: fullySecuredImg,
        title: 'Fully Secured',
        text: `At our hospital, rest assured that all our doctors are fully credentialed, licensed, and undergo rigorous background checks....`
    },
    {
        img: happyPatientsImg,
        title: 'Happy Patients',
        text: `We are committed to making every patient's journey a success story, and we can't wait to add your happy experience to our list of testimonials....`
    },
    {
        img: servicesSupportImg,
        title: '24 Hour Support',
        text: `Our team of dedicated and highly skilled neurologists specializes in diagnosing, treating, and managing a wide range of neurological disorders...`
    }
]


export default function HomeOurServices(){

    const displayDepartmentsInfo = ourServicesInfo.map((info, i) => {
        const { title, text, img } = info

        return (
            <div 
                key={i}
                className="px-lg-2 px-md-0 px-0 col-lg-3 col-md-12 col-12 mb-lg-0 mb-md-2 mb-2"                
            >
                <div
                    style={{
                        borderRadius: '16px',
                        border: '1px solid #FFF',
                        backgroundColor: '#BFEAFF66',
                        minHeight: '430px'
                    }}
                    className="py-3 px-3 d-flex flex-column align-items-stretch justify-content-between"
                >
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <img src={img} className="mb-2" /> 
                        <h1 className="m-0 p-0 text-center w-100 txt-2CAEED fw-600 txt-25 font-family-sources-sans-pro">
                            { title } 
                        </h1>
                    </div>
                    <p className="m-0 p-0 mb-4 txt-15 fw-400 txt-303030 font-family-source-sans-pro">
                        { text }
                    </p>
                    <p className="m-0 p-0 txt-17 clickable fw-600 txt-2CAEED font-family-source-sans-pro">
                        Read more
                    </p>
                </div>
            </div>
        )
    })

    return(
        <div className="p-lg-5 p-md-4 p-4">
            <h1 className="m-0 p-0 text-center txt-000 font-family-source-sans-pro txt-38 fw-600 mb-0">
                Services
            </h1>
            <h1 className="m-0 p-0 text-center txt-2CAEED font-family-source-sans-pro txt-38 fw-600 mb-3">
                we provide our best services
            </h1>   
            <div className="d-lg-flex d-md-block d-block align-items-center justify-content-between mb-3">
                { displayDepartmentsInfo }
            </div>         
            <p className="m-0 p-0 text-end clickable font-family-source-sans-pro fw-600 txt-15 txt-000">
                view more
            </p>
        </div>
    )
}