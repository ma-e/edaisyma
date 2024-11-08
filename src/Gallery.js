import Slider from "react-slick";
import mao from './config/works/mao.jpg';
import babyBird from './config/works/babyBird.jpg';
import cubanBird from './config/works/cubanBird.jpg';
import pr1 from './config/works/pr1.jpg';
import pr0 from './config/works/pr0.jpg';
import pr2 from './config/works/pr2.jpg';
import pr3 from './config/works/pr3.jpg';
import pr4 from './config/works/pr4.jpg';
import pr5 from './config/works/pr5.jpg';
import "./Gallery.css"
import TwoPicturesRow from './TwoPicturesRow';
import Footer from './Footer';
import Menu from './Menu';
import berryImg from "./config/works/gif-test1.gif";

const images = [pr0, pr1, pr2, pr3, pr4, pr5, mao, babyBird, cubanBird];
const randomizedImages = randomizeArrayOrder(images);
const randomizedImages1 = randomizeArrayOrder(images);
const randomizedImages2 = randomizeArrayOrder(images);

function randomizeArrayOrder(arr) {
    return arr.slice().sort(() => Math.random() - 0.5);
}

function Gallery() {
    return (
        <>
                <div className="about-me-container">
                <Menu />

                <div className="header">

                <img
  src={berryImg}
  alt="About Us"
  style={{ width: '300px', height: 'auto' }}
/>                </div>

            <TwoPicturesRow imageSrcArray={images} />

        </div >

                    <Footer />
        </>

    );
}

export default Gallery;