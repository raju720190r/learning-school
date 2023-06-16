
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/usAuth";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get(`/classes/${user?.email}`);
        return res.data;
    });
    console.log(classes)


    return (
        <div className="ml-80">
           <h1 className="uppercase text-4xl text-center my-3">My classes</h1> 


            <div className="w-full">
            <h1 className="text-3xl font-semibold my-6">Total Classes {classes.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
                            <th>Admins Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classItem, index) => (
                            <tr key={classItem._id}>
                                <th>{index + 1}</th>
                                <td>{classItem.name}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.availableSeats}</td>
                                <td>{classItem.numberOfStudents}</td>
                                <td>{classItem.status}</td>

                                <td>{classItem?.feedback ? classItem.feedback : "" }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
   
           
        </div>
    );
};

export default MyClass;