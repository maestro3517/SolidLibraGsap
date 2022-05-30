import { createEffect } from "solid-js";
import { css, styled } from "solid-styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import backgound_product from "../assets/backgound_product(1).png"


const ProductsDiv = css`
    position: relative;
    background: white;
    height: 100vh;
    // max-height: 100vh;
    // padding-top: 45px 0px;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        height: auto;
    }

    @media only screen and (min-height: 1025px){
        height: auto; 
    }
    

    &:before{
        background-image: url('./src/assets/backgound_product(1).png');
        background-repeat: no-repeat;
        opacity: .4;
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        /* margin-top: 45px; */
        background-size: cover;
    };

    
`

const Title = css`
    padding-top: 5%;
    padding-bottom: 3%;
    text-align: center;
    font-family: inter, sans-serif ;
    color: #0e4295;
    font-weight: 500;
    font-size: 215%;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 150%;
        width: 100%;
        padding-top: 5%;
    }
`


const Grid = styled.div`
   
`

// const BulletGrid = styled(Grid)`
//     display: flex;
//     align-items: center;
// `


const ProductTitleSubStyled = css`
    padding: 10px;
    border-radius: 10px;
    justify-content: space-between;
    padding-top: 1%; 
    text-align: left;
    width:70% !important;
    margin:0 auto;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #737373;
    line-height:150%;
    // font-weight: 300;
    font-size: 160%;
    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 125%;
        width: 90%;
    }
`


const Whywe = () => {

    createEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //Why we animation

        gsap.fromTo(".whyweBullets", { x: -700, y: 0, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.whyweBullets',
                    start: 'top bottom',
                    end: '30% 40%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )

        gsap.fromTo(".whyweTitle", { x: 0, y: 400, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.whyweBullets',
                    start: 'top bottom',
                    end: '30% 40%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )
    })

    const productsArray = [
        "Backed by a qualified team of acumen and pro-active employees as well as advance machineries.",
        "Produce and deliver products as per customers' expectations ensuring quality and reliability at all times.",
        "Constantly monitor the products' performance and the level of customer satisfaction.",
        "Give strong metallurgical bond and provide a corrosion resistant barrier.",
        "The low cost of production helps us to provide a competitive edge to our customers."
    ]

    return (
        <>
            <div className={`${ProductsDiv} panel`}>
                <div className="whywe">
                    <div className={`${Title} whyweTitle`}>WHY WE ?</div>
                    {productsArray.map(item => {
                        return <div className={`${ProductTitleSubStyled} whyweBullets`}>{item}</div>
                    })}
                </div>
            </div>
        </>
    );
}


export default Whywe;