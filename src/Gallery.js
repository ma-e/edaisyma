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

const images = [pr0, pr1, pr2, pr3, pr4, pr5, mao, babyBird, cubanBird];

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