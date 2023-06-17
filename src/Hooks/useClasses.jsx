import { useEffect, useState } from "react";


const useClasses = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://l-school-server.vercel.app/popularClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
    return [classes]
};

export default useClasses;