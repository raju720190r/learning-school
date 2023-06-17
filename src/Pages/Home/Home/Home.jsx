import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <PopularClass />
            <PopularInstructors />
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;