import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import MyToys from "../myToys/myToys";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <Gallery></Gallery>
            <br />
            <MyToys></MyToys>
        </div>
    );
};

export default Home;