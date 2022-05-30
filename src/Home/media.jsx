import { css, styled } from "solid-styled-components";
import { Image } from "solid-bootstrap";
import gsap from "gsap";
import { createEffect } from "solid-js";
import ScrollTrigger from "gsap/ScrollTrigger";
import newMedia from "../assets/New_media_full.jpeg";
import media1 from "../assets/Media(2).png";
import media2 from "../assets/Media(1).png";

const Grid = styled.div`
    display: grid;
    grid-template-columns:60% 18%;
    background: transperant;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-evenly;
`

const MediaRootDiv = css`
    display:grid;
    background:white;
    overflow:none;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        height: auto;
    }

    @media only screen and (min-height: 1025px){
        height: auto;
    }
`

const MediaTitleDiv = styled.div`
    padding-top: 5%;    

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 100%;
        width: 100%;
        height: auto;
    }

    @media only screen and (min-height: 1025px){
        height: auto;
        padding:8% 0%;
    }
`

const MediaTitle = styled.div`
    text-align: center;
    font-weight: 500;
    font-family: inter, sans-serif  !important;
    color: #0e4295;
    font-size: 215%;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 150%;
        width: 100%;
    }
`

const MediaSubTitle = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 60%;
    font-weight: 500;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif !important;
    color: #737373;
    font-size: 160%;
    line-height:150%;
    

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 125%;
        width: 90%;
        padding:3%;
    }
`

const MediaGrid = styled(Grid)`
    max-width:100%;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        height: auto;
        margin-top:3% !important;
        padding:5% 0% !important;
        text-align:center;
    }

    @media only screen and (min-height: 1025px){
        height: auto;
        padding:5% 0%;
    }
`

const StyledImage = styled(Image)`
    padding:${props => props.Padding};
    background:#dcdbdb;
    max-width:100%;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        height: auto;
        box-shadow: 0 .3rem .3rem rgba(0, 0, 0, .20) !important;
        padding:1%;
    }
`

const StyledGrid = css`
        display:grid;
        padding:2% ;
        align-content: space-evenly;
`



const Media = () => {

    createEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //Product Animation   
        gsap.fromTo(".mediaHeading", { x: 0, y: -400, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.media',
                    start: 'top bottom',
                    end: '30% 40%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )

        gsap.fromTo(".MediaImgLeft", { x: -700, y: 0, autoAlpha: 0, opacity: .5 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                opacity: 1,
                ease: "Power2.easeIn",
                overwrite: "auto",
                scrollTrigger: {
                    trigger: '.media',
                    start: 'top bottom',
                    end: '30% 40%',
                    toggleActions: "restart pause reverse none",
                    markers: false,
                    scrub: true,
                    toggleClass: { targets: ".whywe", className: "products" }
                }
            }
        )

        gsap.fromTo(".MediaImgRight", { x: 700, y: 0, autoAlpha: 0, opacity: 0 },
        {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            opacity: 1,
            ease: "Power2.easeIn",
            overwrite: "auto",
            scrollTrigger: {
                trigger: '.media',
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

    return (<>
        <div className={`${MediaRootDiv} panel `}>
            <div className="media">
                <div className="mediaHeading">
                    <MediaTitleDiv >
                        <div>
                            <MediaTitle className='text-uppercase'>
                                Media
                            </MediaTitle>
                        </div>
                        <div>
                            <MediaSubTitle>
                                Stay connected with us here for official updates of the Libra Steel pertaining to People, Businesses and Initiatives.
                            </MediaSubTitle>
                        </div>
                    </MediaTitleDiv>
                </div>

                <div className="MediaImg">
                    <MediaGrid container spacing={1}>
                        <div style={{ padding: "2%" }} className="MediaImgLeft">
                            <StyledImage fluid Padding="1%" className="img-fluid" src={newMedia} />
                        </div>
                        <div style={{}} className={`${StyledGrid} MediaImgRight`}>
                            <div>
                                <StyledImage fluid src={media1} />
                            </div>
                            <div>
                                <StyledImage fluid src={media2} />
                            </div>
                        </div>
                    </MediaGrid>
                </div>
            </div>
        </div>
    </>
    );
}

export default Media;