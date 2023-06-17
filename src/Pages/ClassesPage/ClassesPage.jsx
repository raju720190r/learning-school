import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loadingImage from "../../assets/loading-waiting.gif";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import useClasses from "../../hooks/useClasses";
import useInstructor from "../../hooks/useInstructor";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const ClassesPage = () => {
  useTitle("ClassesPage")
  const [instructors, setInstructors] = useState([]);
  const [classes] = useClasses();
  const [,refetch] = useCart()
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigation = useNavigate()
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()
  const handelAddToClass = (item) => {
    console.log('item',item);
    const {_id, instructorName,availableSeats,description,image,instructorEmail,price,studentNumber,time,title} = item
    if (user && user.email ) {
      const cartItem = {classId:_id, instructorName, availableSeats, description,image,instructorEmail,price,studentNumber,time,title, email: user?.email}
      fetch(`http://localhost:5000/classSelects`,{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
        
      })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            refetch()
            Swal.fire({
              icon: 'success',
              title: 'Class added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    }
    else{
      Swal.fire({
        title: 'please login to order to Class',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigation('/login', {state: {from: location}})
        }
      })
    }
  };
  useEffect(() => {
    setInstructors(classes);
  }, [classes]);
  if(classes.length == 0){
    return <div className="h-80vh w-96 mx-auto"><img src={loadingImage} alt="" /></div>
  }
  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-3 gap-6 py-24">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className={`card md:w-96 shadow-xl ${instructor?.availableSeats===0 ? "bg-red-200" : "bg-base-100"}`}
          >
            <figure>
              <img
                className="h-64 w-full "
                src={instructor?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {instructor?.title}</h2>
              <p>Instructor name: {instructor?.instructorName}</p>
              <p>Available seats: {instructor?.availableSeats}</p>
              <p>Price: {instructor?.price}</p>
            </div>
            <div className="card-actions px-7 pb-5">
              <button  disabled={instructor?.availableSeats===0 || isAdmin || isInstructor} onClick={()=>handelAddToClass(instructor)} className="btn bg-pink-300 hover:bg-pink-700 hover:text-white">Select Class</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;

