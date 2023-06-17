import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useInstructorClass from "../../../../hooks/useInstructorClass";
import useTitle from "../../../../hooks/useTitle";

const InstructorClass = () => {
  useTitle("InstructorClass")
  const {user} = useAuth()
  const [instructors, setInstructors] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [classes] = useInstructorClass();
  useEffect(() => {
    setInstructors(classes);
    const filteredData = instructors.filter(item =>item.instructorEmail == user.email);
    setFilteredArray(filteredData)
  }, [classes,instructors, user]);  
  
  return (
    <div className="w-full my-20">
      <h1 className="text-center text-3xl font-semibold mb-8">Class Status & Update</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Total Enrolled Student</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredArray.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                </td>
                <td>{item.studentNumber}</td>
                <th>{item.price}</th>
                <th>{item.status}</th>
                <th>{item?.status === "approved" || item?.status === "pending"? " " : item?.feedback}</th>
                <th><button className="btn bg-cyan-200 hover:bg-cyan-300">Update</button></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClass;
