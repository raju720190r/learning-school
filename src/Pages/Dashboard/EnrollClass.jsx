import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const EnrolledClass = () => {

    const { user } = useAuth();
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_serverURL}/enrolled/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
            })
    }, [user?.email])
    console.log(classes)

    return (
        <div className="w-full">
       
       <div className="overflow-x-auto w-full">
           <table className="table w-full">
               {/* head */}
               <thead>
                   <tr className="text-center">
                       <th>#</th>
                       <th>ClassImage</th>
                       <th>Class Name</th>
                       <th>Instructor Name</th>
                       <th>Available Seats</th>
                       <th>Price</th>
                       
                   </tr>
               </thead>
               <tbody className="text-center">
                   {
                       classes.map((classItem, index) => <tr key={classItem._id}>
                           <td>
                               {index + 1}
                           </td>
                           <td>
                               <div className="mask mask-squircle w-12 h-12">
                                   <img src={classItem.enrolledClass.image} alt="Class image" />
                               </div>
                           </td>
                           <td>{classItem.enrolledClass.name}</td>
                           <td>
                               {classItem.enrolledClass.instructor}
                           </td>

                           <td className="text-center">
                               {classItem.enrolledClass.availableSeats}
                           </td>
                           <td className="">${classItem.enrolledClass.price}</td>
                           
                       </tr>)
                   }

               </tbody>
           </table>
       </div>
   </div>
    );
};

export default EnrolledClass;