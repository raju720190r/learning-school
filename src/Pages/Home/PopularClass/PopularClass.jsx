import { useEffect, useState } from "react";
import SingleClass from "../../../components/SingleClass";
import useClasses from "../../../hooks/useClasses";
import loadingImage from "../../../assets/loading-waiting.gif";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);
  const [classes] = useClasses();
  useEffect(() => {
    setPopular(classes.slice(0,6));
  }, [classes]);
  if(classes.length == 0){
    return <div className="h-80vh w-96 mx-auto"><img src={loadingImage} alt="" /></div>
  }


  return (
    <div>
      <h1 className="text-3xl font-medium text-center mt-4 py-8 uppercase fond-bold bg-pink-200 mb-5">
        Popular Classes Section{" "}
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6  mx-auto">
        {popular.map((single) => (
          <SingleClass key={single._id} single={single}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
