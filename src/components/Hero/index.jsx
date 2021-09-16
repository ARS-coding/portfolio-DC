import React, { useEffect, useRef } from 'react'

import { Container } from "react-bootstrap";

import gsap from "gsap";

import PointDownIMG from "../../images/point-down.png";
import { ReactComponent as HeroShapesSVG } from "../../images/hero-shapes.svg";
import { ReactComponent as ScrollIconSVG } from "../../images/scroll-icon.svg";

import "./index.scss";

function Hero() {
    
    useEffect(() => {
        const timeline = gsap.timeline();
        timeline.from(".square-animation-scale", { duration: 1.5, y: -30, x: -30, scale: 0, ease: "expo" });
        timeline.from(".square-animation-up", { duration: 1.2, y: 50, opacity: 0, stagger: .1 });

        
        const textTl = gsap.timeline({ yoyo: true, repeat: -1, delay: 2.7 });
        textTl.to(".hand", { duration: 1, y: -15, ease: "bounce" })
        textTl.from(".hand", { duration: 1, y: -15, ease: "bounce" })
        // textTl.from(".heyoo", { duration: 1, x: 30 })
    }, []);

    const text = useRef();
    
    return (
        <Container fluid className="hero-container px-3 px-sm-0 d-flex">
            <Container className="hero-content-container ms-lg-0 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1 className="mx-auto"><span>Beautifully</span> Crafted<br/>Web Experiences</h1>
                    <div className="meet mx-auto">
                        <img src={PointDownIMG} className="hand" alt="A hand pointing down" />
                        <p ref={text} onClick={() => gsap.pause()} className="heyoo"><span>Meet</span> Ali Rıza Şahin</p>
                    </div>
                    <ScrollIconSVG className="mx-auto" />
                </div>
                
                <HeroShapesSVG className="d-none d-sm-none d-md-none d-lg-inline" />
            </Container>
        </Container>
    )
}

export default Hero
