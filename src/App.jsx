import SlideShow from './Home/slideshow';
import Welcome from './Home/Welcome';
import Products from "./Home/products"
import Whywe from './Home/Whywe';
import Media from './Home/media';
import Footer from './Home/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { createEffect } from 'solid-js';
import '../src/Home/CSS/main.css';


export default function Home() {

  createEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: false,
        pinSpacing: false
      });
    });


    //media animation

    gsap.to(".media",
      {
        scale: .7,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top bottom',
          end: 'top bottom',
          toggleActions: "restart none reverse none",
          markers: false,
          toggleClass: { targets: ".whywe", className: "red" },
        }
      }
    )

    gsap.to(".whywe",
      {
        scale: .7,
        scrollTrigger: {
          trigger: '.media',
          start: 'top bottom',
          end: 'top 40%',
          toggleActions: "restart pause reverse none",
          scrub: true,
          markers: false
          // toggleClass: { targets: ".whywe", className: "" }
        }
      }
    )

    gsap.to(".products",
      {
        scale: .7,
        scrollTrigger: {
          trigger: '.whywe',
          start: 'top bottom',
          end: 'top 40%',
          toggleActions: "restart pause reverse none",
          markers: false,
          scrub: true,
          toggleClass: { targets: ".whywe", className: "products" }
        }
      }
    )

    gsap.to(".welcome",
      {
        scale: .7,
        scrollTrigger: {
          trigger: '.products',
          start: 'top bottom',
          end: 'top 40%',
          toggleActions: "restart pause reverse none",
          scrub: true,
          markers: false,
          toggleClass: { targets: ".welcome", className: "rounded" }
        }
      }
    )


  });


  return (<>
    <div className='panel welcome parallax'>
      <SlideShow>
      </SlideShow>
      <Welcome>
      </Welcome>
    </div>
    <Products>
    </Products>
    <Whywe></Whywe>
    <Media>
    </Media>
    <Footer></Footer>
  </>)
}
