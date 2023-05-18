import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import AllToys from "../allToys/allToys";
import MyToys from "../myToys/myToys";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AllToys></AllToys>
            <MyToys></MyToys>
        </div>
    );
};

export default Home;