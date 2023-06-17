import { Fade, Slide } from "react-awesome-reveal";
import useTitle from "../../../hooks/useTitle";

const InstructorHome = () => {
  useTitle("InstructorHome")
  return (
    <div className="">
      <Slide>
        <h1 className="text-3xl font-semibold mb-3">Learning School Instructor Role</h1>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      As a Language Learning instructor, your role is to guide and facilitate Language classes, helping students develop proper posture, alignment, and breathing techniques. 
      </Fade>
    </div>
  );
};

export default InstructorHome;
