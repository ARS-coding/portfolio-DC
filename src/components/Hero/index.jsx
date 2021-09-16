import React, { useEffect, useRef } from 'react'

import { Container } from "react-bootstrap";

import gsap from "gsap";

import PointDownIMG from "../../images/point-down.png";
import { ReactComponent as HeroShapesSVG } from "../../images/hero-shapes.svg";
import { ReactComponent as ScrollIconSVG } from "../../images/scroll-icon.svg";

import "./index.scss";

function Hero() {
    
    useEffect(() => {
        if(window.innerWidth >= 992) {
            const timeline = gsap.timeline();
            timeline
            .from(".hero-content-container", { duration: 1, opacity: .3, y: -20 })
            .from(".square-animation-scale", { duration: 1.5, y: -30, x: -30, scale: 0, ease: "expo" })
            .from(".square-animation-up", { duration: 1.2, y: 50, opacity: 0, stagger: .1 });
            
            gsap.fromTo(".meet-text, .hand, .scroll-svg",
                { duration: 1.5, y: -20, delay: 1.5 },
                { duration: 1.2, opacity: 1, y: 0, delay: 1.5 }
            );
        } 
        else {
            gsap.fromTo(".meet-text, .hand",
                { duration: 1.5, y: -20 },
                { duration: 1.2, opacity: 1, y: 0 }
            );
        }
    }, []);

    return (
        <Container fluid className="hero-container px-3 px-sm-0 d-flex">
            <Container className="hero-content-container ms-lg-0 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="mx-auto"><span className="beautifully">Beautifully</span> Crafted<br/>Web Experiences</h1>
                    <div className="meet mx-auto">
                        <img src={PointDownIMG} className="hand" alt="A hand pointing down" />
                        <p className="meet-text"><span>Meet</span> Ali Rıza Şahin</p>
                    </div>
                    <ScrollIconSVG className="scroll-svg mx-auto" />
                </div>
                
                <HeroShapesSVG className="d-none d-sm-none d-md-none d-lg-inline" />
            </Container>
        </Container>
    )
}

export default Hero
