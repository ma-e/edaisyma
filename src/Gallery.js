import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "../config/works/cubanBird" },
    { url: "../config/works/babyBird" },
    { url: "../config/works/mao" },
];

function Gallery() {

    return (
        <div id="gallery" className="gallery">
            <h1>Gallery</h1>
            {/* <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
            /> */}
        </div >
    );
}

export default Gallery;