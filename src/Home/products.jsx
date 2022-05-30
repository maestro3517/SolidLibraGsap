import { css, styled } from "solid-styled-components";
import { Image } from 'solid-bootstrap'
import { createEffect } from "solid-js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import background from "../assets/backgound_product(1).png";
import MSAngle from "../assets/M.S.Angle.png";
import MSRods from "../assets/Rods_Bars.png";
import MSFlat from "../assets/M.S.Flat.png";



const ClassDiv = ({ className, children }) => (
    <div className={`${className}`}>
        {children}
    </div>
);


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

const ProductTitleSub = styled.div`
    padding-top: 1%; 
    text-align: center;
    margin: 0 auto;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #737373;
    line-height:150%;
    // font-weight: 300;
    font-size: 160%;
    width: 60%;
    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 125%;
        width: 90%;
    }
`

const GridProducts = css`
    padding: 5%;
    padding-top: 4%;
    // margin-top: 30px;
    position: relative;
    // bottom: 40px;
    text-align:center;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 100%;
        padding: 3%;
        padding-top: 2%;

        .MuiGrid-container {
            justify-content:center;
        }
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,30%);
    background-color: transperant;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-between;
`


const StyledImage = styled(Image)`
    max-width:100%;
  `

const Products = () => {

    createEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //Product Animation   
        gsap.fromTo(".prodContent", { x: 0, y: -400, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.products',
                    start: 'top bottom',
                    end: '30% 40%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )

        gsap.fromTo(".Prodimg", { x: -700, y: 0, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.products',
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

    return (
        <>
            <div className={`${ProductsDiv} panel`} >
                <div className="products">
                    {/* <Fade triggerOnce direction='up' delay={300} duration={700}> */}
                    <div className={`${Title} title prodContent`}> PRODUCTS & SOLUTIONS</div>
                    {/* </Fade> */}

                    {/* <Fade triggerOnce direction='up' delay={500} duration={700}> */}
                    <div className="prodContent">
                        <ProductTitleSub>With innovative technology, a progressive attitude, and experience of 33 years , Libra Steel is committed to solving our cutomer's most challenging needs.</ProductTitleSub>
                    </div>
                    {/* </Fade> */}
                    <div className={`${GridProducts}`}>
                        <GridContainer container >
                            <StyledImage xs={2} md={2} fluid className="Prodimg" src={MSAngle} />
                            <StyledImage fluid className="Prodimg" src={MSFlat} />
                            <StyledImage fluid className="Prodimg" src={MSRods} />
                        </GridContainer>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Products;