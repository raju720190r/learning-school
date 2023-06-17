import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <PopularClass />
            <PopularInstructors />
        </div>
    );
};

export default Home;