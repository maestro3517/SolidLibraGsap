// import '../css/styles.css'

import { styled } from "solid-styled-components";
import "solid-slider/slider.css";
import { Slider } from "solid-slider";
import autoplay from "solid-slider/plugins/autoplay";
import SlideShow_1 from "../assets/SlideShow_3.png";
import SlideShow_2 from "../assets/SlideShow_2.png";
import SlideShow_3 from "../assets/SlideShow_1.png";
// import slideshow 


const CarouselRoot = styled("Carousel")`

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        height: 100vh;
    }   


    &:after {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;
        z-index: 0;
        opacity:.8;
    }
     
`

const CarouselImage = styled.div`
    height: 80vh;
    background-position: center center;
    width: 100%;
    background-image: URL("${props => props.url}");
    background-repeat: no-repeat;
    background-size:cover;

    @media only screen and (min-width: 320px)  and  (max-device-width:850px) {
        font-size: 135%;
        width: 100%;
        padding: 0%;
        height: 100vh;
    }

`

const SlideShow = () => {

    // const classes = useStyles();

    const Carousel = () => {
        return (
            <Slider options={{ loop: true }} plugins={[autoplay(3500, {})]}>
                <CarouselImage url={SlideShow_1}></CarouselImage>
                <CarouselImage url={SlideShow_2}></CarouselImage>
                <CarouselImage url={SlideShow_3}></CarouselImage>
            </Slider>
        );
    };

    return (

        <Carousel />

    )
}


export default SlideShow;