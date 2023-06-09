import { Helmet } from "react-helmet";
import Banner from "./Banner";
import PopularCourse from "./PopularCourse";
import PopularIns from "./PopularIns";


const Home = () => {
    return (
        <div>
            <Helmet><title>Learning School || Home</title></Helmet>
           <Banner></Banner>
           <PopularCourse></PopularCourse>
           <PopularIns></PopularIns> 
        </div>
    );
};

export default Home;