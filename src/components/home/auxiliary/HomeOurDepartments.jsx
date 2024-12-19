import React from "react";


const ourDepartmentsInfo = [
    {
        title: 'ACCIDENT AND EMERGENCY',
        text: 'The Accident and Emergency Department at the University of Calabar Teaching Hospital (UCTH) is dedicated to providing high-quality, rapid-response care for patients experiencing acute medical emergencies. Our team of skilled healthcare professionals, including emergency physicians, nurses, and support staff, is committed to delivering comprehensive care in a compassionate environment...'
    },
    {
        title: 'ACCOUNTS',
        text: 'The finance and account department is set up to handle all the finances and expenditures of the hospital. The department since its inception has carried out its duties creditably well. It mainly deals with funds into and out of the hospital in whatever form including dividends on investment; budgeted funds from the FGN being judiciously expended in line with the budgeted appropriation...'
    },
    {
        title: 'ANAESTHESIOLOGY',
        text: `The Department of Anaesthesiology at the University of Calabar Teaching Hospital (UCTH) is a critical unit dedicated to the provision of comprehensive perioperative care, pain management, and critical care services. Established to support the hospital’s mission of delivering quality healthcare, the department plays a pivotal role in the safe administration...`
    }
]


export default function HomeOurDepartments(){

    const displayDepartmentsInfo = ourDepartmentsInfo.map((info, i) => {
        const { title, text } = info

        return (
            <div 
                key={i}
                className="px-lg-2 px-md-0 px-0 col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-2 mb-2"                
            >
                <div
                    style={{
                        borderRadius: '16px',
                        border: '1px solid #FFF',
                        backgroundColor: '#BFEAFF66',
                        minHeight: '430px'
                    }}
                    className="py-3 px-3 d-flex flex-column align-items-start justify-content-between"
                >
                    <h1 className="m-0 p-0 text-center w-100 mb-2 txt-2CAEED fw-600 txt-25 font-family-sources-sans-pro">
                        { title }  
                    </h1>
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
                Our Departments
            </h1>
            <h1 className="m-0 p-0 text-center txt-2CAEED font-family-source-sans-pro txt-38 fw-600 mb-3">
                with standard best practices
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