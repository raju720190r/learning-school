import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";
import useTitle from "../../../../hooks/useTitle";
import Payment from "../Payment/Payment";

const MyClass = () => {
  useTitle("MyClass")
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const classPrice = total;
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classSelects/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${classPrice}</h3>
      </div>
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
              <th>pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
                {/* <td><Link to={`/dashboard/payment`}><button className="btn btn-warning btn-sm">PAY</button></Link></td> */}
                <td className="w-[550px] shadow-xl">
                  <Payment price={item.price} card={item}></Payment>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
