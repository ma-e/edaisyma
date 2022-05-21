import Slider from "react-slick";
import mao from './config/works/mao.jpg';
import babyBird from './config/works/babyBird.jpg';
import cubanBird from './config/works/cubanBird.jpg';

// const images = [
//     { url: "./config/works/cubanBird.jpg" },
//     { url: "./config/works/babyBird.jpg" },
//     { url: "./config/works/mao.jpg" },
// ];

const images = [mao, babyBird, cubanBird];

function Gallery() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div id="gallery" className="gallery sc">
            <h1>Gallery</h1>
            <Slider {...settings}>
                {images.map((img, i) =>
                    <div key={i}>
                        <img src={img} />
                    </div>
                )}

            </Slider>
        </div >
    );
}

export default Gallery;