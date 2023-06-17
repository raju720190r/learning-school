import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";
import SingleInstructor from "../../../components/SingleInstructor";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [classes] = useClasses();
  useEffect(() => {
    setInstructors(classes.slice(0, 6));
  }, [classes]);
  return (
    <div>
      <h1 className="text-3xl font-medium text-center mt-8 py-8 uppercase fond-bold bg-pink-200 mb-5">
        Popular Instructors Section{" "}
      </h1>
      <div className="grid md:grid-cols-3 gap-6 ">
        {instructors.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
