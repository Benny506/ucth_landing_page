import React from "react";
import './css/home.css'
import HomeCarousel from "./auxiliary/HomeCarousel";
import HomeHeroSection1 from "./auxiliary/HomeHeroSection1";
import HomeAboutUs from "./auxiliary/HomeAboutUs";
import HomeContactUs from "./auxiliary/HomeContactUs";
import HomeHeroSection2 from "./auxiliary/HomeHeroSection2";
import HomeOurDepartments from "./auxiliary/HomeOurDepartments";
import HomeOurServices from "./auxiliary/HomeOurServices";
import HomeNewsEvents from "./auxiliary/HomeNewsEvents";
import Footer from "../footer/Footer";


export default function Home(){
    return (
        <div>
            <div className="mb-0">
                <HomeCarousel />
            </div>
            <div className="">
                <HomeHeroSection1 />
            </div>
            <div>
                <HomeAboutUs />
            </div>
            <div>
                <HomeContactUs />
            </div>
            <div>
                <HomeHeroSection2 />
            </div>
            <div>
                <HomeOurDepartments />
            </div>
            <div>
                <HomeOurServices />
            </div>
            <div>
                <HomeNewsEvents />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}