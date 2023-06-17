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
      <h1 className="text-3xl font-medium text-center mt-8 py-8">
        Popular Instructors Section{" "}
      </h1>
      <p className=" px-8 md:w-5/6 mx-auto text-justify pb-8 text-gray-500">
        Welcome to our popular instructors section! Our team consists of highly
        skilled and experienced instructors who are passionate about guiding
        students on their yoga and meditation journey. Meet Sarah Thompson, a
        compassionate Hatha Yoga and Restorative Yoga teacher, and Michael
        Johnson, a dynamic Vinyasa Flow instructor. Join their classes for an
        enriching experience.
      </p>
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
