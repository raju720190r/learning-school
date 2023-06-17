import { Fade, Slide } from "react-awesome-reveal";
import useTitle from "../../../hooks/useTitle";
const StudentHome = () => {
  useTitle("StudentHome")
    return (
        <div className="">
        <Slide>
          <h1 className="text-3xl font-semibold mb-3">Yoga Student Role</h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
        As a yoga student, my role is to cultivate mindfulness, strength, and flexibility through regular practice, embrace the teachings of my instructor, and support a positive and inclusive yoga community. 
        </Fade>
      </div>
    );
};

export default StudentHome;