import Banner from "../Banner/Banner";
import AllToys from "../allToys/allToys";
import MyToys from "../myToys/myToys";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllToys></AllToys>
            <MyToys></MyToys>
        </div>
    );
};

export default Home;