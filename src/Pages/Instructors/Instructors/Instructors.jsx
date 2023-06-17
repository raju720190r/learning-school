import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";
import loadingImage from "../../../assets/loading-waiting.gif";
import useTitle from "../../../hooks/useTitle";

const Instructors = () => {
  useTitle("Instructors")
  const [instructors, setInstructors] = useState([]);
  const [classes] = useClasses();
  useEffect(() => {
    setInstructors(classes);
  }, [classes]);
  if (instructors.length == 0) {
    return (
      <div className="h-80vh w-96 mx-auto"><img src={loadingImage} alt="" /></div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-3 gap-6 py-24">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card md:w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-64 w-full "
                src={instructor?.instructorImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor?.instructorName}</h2>
              <p>Email: {instructor?.instructorEmail}</p>
              <p>Student: {instructor?.studentNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
