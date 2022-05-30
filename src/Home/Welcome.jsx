import { Fade } from "react-awesome-reveal";
import gsap from "gsap";
import { createEffect } from "solid-js";
import ScrollTrigger from "gsap/ScrollTrigger";

import { styled } from "solid-styled-components";

const Welcome = () => {

    gsap.registerPlugin(ScrollTrigger);

    createEffect(() => {
        gsap.fromTo(".quote", { x: 0, y: 0, autoAlpha: 1, opacity: 1 },
            {
                duration: 1.25,
                x: -700,
                y: 0,
                autoAlpha: 0,
                opacity: 0.5,
                ease: "Power2.easeOut",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.welcome',
                    start: '50% 40%',
                    end: '50% 20%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )
    })

    const WelQuote=styled.div`
        text-align: center;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        color: #0e4295;
        font-weight: 500;
        font-size: 180%;
        width: 85%;
        margin: 0 auto;
        line-height: 150%;
        height:20vh;
        display:flex;
        align-items:center;
        justify-content:center;

        @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
            font-size: 130%;
            width: 90%;
            height:auto;
            padding:10% 0%;
        }

        @media only screen and (min-height: 1025px){
            height: 20vh;
            padding:10% 0%;
        }
    `

    return (<>
            <div className="quote">
                <WelQuote>
                    As a leader in the steel industry, Libra Steel is dedicated to delivering high-quality products to our customers and building value for our stakeholders.
                </WelQuote>
            </div>


    </>);
};


export default Welcome;