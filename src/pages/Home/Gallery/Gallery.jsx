import img1 from '../../../assets/images/cute-kid-playing-with-wooden-train-side-view_23-2149357243.avif';
import img2 from "../../../assets/images/cute-little-boy-red-sweater_1157-45251.avif";
import img3 from "../../../assets/images/father-son-playing-with-trucks-lego-pieces_23-2148500805.avif";
import img4 from "../../../assets/images/happy-asian-children-playing-lawn-playground_640221-82.avif";
import img5 from "../../../assets/images/superheroes-children-playing-home_411285-1169.avif";
import img6 from "../../../assets/images/top-view-hands-holding-eco-toy_23-2149884350.avif";
import img7 from "../../../assets/images/toy-car-transporter-with-cars-white-background_528985-2196.avif";

const Gallery = () => {
    return (
        <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
                <img src={img1}/>
            </div>
            <div className="carousel-item h-full">
                <img src={img2} />
            </div>
            <div className="carousel-item h-full">
                <img src={img3}/>
            </div>
            <div className="carousel-item h-full">
                <img src={img4}/>
            </div>
            <div className="carousel-item h-full">
                <img src={img5}/>
            </div>
            <div className="carousel-item h-full">
                <img src={img6}/>
            </div>
            <div className="carousel-item h-full">
                <img src={img7}/>
            </div>
        </div>
    );
};

export default Gallery;