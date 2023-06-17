import { useEffect, useState } from "react";
import SingleClass from "../../../components/SingleClass";
import useClasses from "../../../hooks/useClasses";
import Lottie from "lottie-react";
import loadingImage from "../../../assets/98432-loading";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);
  const [classes] = useClasses();
  useEffect(() => {
    setPopular(classes.slice(0,6));
  }, [classes]);
  if(classes.length == 0){
    return <div className="h-80vh"><Lottie className="h-screen" animationData={loadingImage} loop={true} /></div>
  }


  return (
    <div>
      <h1 className="text-3xl font-medium text-center mt-4 py-8">
        Popular Classes Section{" "}
      </h1>
      <p className=" px-8 md:w-5/6 mx-auto text-justify pb-8 text-gray-500">
        Welcome to our yoga and meditation school! We are thrilled to have you
        join us on a journey of self-discovery and well-being. Our school is
        dedicated to providing a nurturing environment where you can explore the
        transformative practices of yoga and meditation. In our popular classes
        section, we offer a diverse range of classes designed to meet the needs
        of various individuals. Our Hatha Yoga class focuses on gentle postures,
        breath control, and relaxation techniques, making it ideal for beginners
        or those seeking a slower-paced practice. If you crave a more dynamic
        experience, our Vinyasa Flow class synchronizes movement with breath,
        creating a fluid and energetic practice.
      </p>
      <div className="grid md:grid-cols-3 gap-6  mx-auto">
        {popular.map((single) => (
          <SingleClass key={single._id} single={single}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
