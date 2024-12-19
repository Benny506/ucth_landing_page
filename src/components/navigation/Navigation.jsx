import React from "react";
import { IoMdMenu } from "react-icons/io";


const navLinks = [
    {
        title: 'Home'
    },
    {
        title: 'Doctors'
    },
    {
        title: 'Departments'
    },
    {
        title: 'SOPs'
    },
    {
        title: 'Schools'
    },
    {
        title: 'About'
    },
    {
        title: 'Contact'
    },
    {
        title: 'News'
    }
]


export default function Navigation(){

    const displayNavLinks = navLinks.map((navLink, i) => {
        const { title } = navLink

        return(
            <div
                key={i}
                className="clickable d-flex align-items-center justify-content-center"
            >
                <p className="fw-600 m-0 p-0 text-center txt-15 txt-FFF font-family-source-sans-pro">
                    { title }
                </p>
            </div>
        )
    })

    return (
        <div>
            <div 
                style={{
                    borderBottom: '2px solid #96969680'
                }}
                className="d-lg-flex d-md-none d-none p-3 align-items-center justify-content-between"
            >
                <div className="col-lg-2 d-flex align-items-center justify-content-start" />
                <div className="col-lg-7 d-flex align-items-center justify-content-between">
                    { displayNavLinks }
                </div>
                <div className="col-lg-2 d-flex align-items-center justify-content-end">
                    <div className="clickable d-flex align-items-center justify-content-center mx-3">
                        <p className="fw-600 m-0 p-0 txt-15 txt-FFF font-family-source-sans-pro text-center">
                            Webmail
                        </p>
                    </div>

                    <button 
                        style={{
                            border: '1px solid #FFF',
                            borderRadius: '30px'
                        }}
                        className="px-3 py-1 bg-transparent fw-600 txt-15 txt-FFF font-family-source-sans-pro text-center"
                    >
                        Login
                    </button>
                </div>
            </div>

            <div
                style={{
                    borderBottom: '2px solid #96969680'
                }}
                className="d-lg-none d-md-flex d-flex p-3 align-items-center justify-content-between"            
            >
                <div className="col-lg-6">
                    <h1 className="m-0 p-0 font-family-source-sans-pro txt-FFF fw-600 txt-25">
                        UCTH
                    </h1>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-end">
                    <IoMdMenu color="#FFF" size={40} className="clickable" />
                </div>
            </div>
        </div>
    )
}