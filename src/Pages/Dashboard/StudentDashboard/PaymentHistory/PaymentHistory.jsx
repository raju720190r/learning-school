import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";

const PaymentHistory = () => {
  useTitle("PaymentHistory")
    const {user} =useAuth()
    const [payedClass, setPayedClass] = useState([])

    useEffect(()=>{
       user?.email && fetch(`http://localhost:5000/payed-class/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setPayedClass(data);
        })
    },[user])
  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-semibold mb-8 mt-10">My Enrolled Classes</h1>
      <div className="overflow-x-auto w-">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>InstructorName</th>
              <th className="text-end">Price</th>
              <th className="text-center">StudentNumber</th>
            </tr>
          </thead>
          <tbody>
            {payedClass.map((item, index) => (
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
                <td>{item.title}</td>
                <td>{item.instructorName}</td>
                <td className="text-end">${item.price}</td>
                <td className="text-center">{item.studentNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
