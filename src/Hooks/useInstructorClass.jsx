import { useEffect, useState } from "react";


const useInstructorClass = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://l-school-server.vercel.app/instructorClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
    return [classes]
};

export default useInstructorClass;