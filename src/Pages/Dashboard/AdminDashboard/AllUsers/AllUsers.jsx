import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useTitle from "../../../../hooks/useTitle";


const AllUsers = () => {
    useTitle("AllUsers")
    const [axiosSecure] = useAxiosSecure()
    const {data: users = [], refetch} = useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/users')
        console.log('res',res);
        return res.data
    })
    const handleMakeAdmin = (user,role) =>{
        console.log('role',role);
        const work ={ id: user?._id, role}
        fetch(`https://l-school-server.vercel.app/users/admin`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(work),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete =() =>{

    }
    return (
        <div className="w-full">
            <h1 className="text-center text-3xl font-semibold mt-10">Change the user Role</h1>
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="text-xl">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div><td>{ user.role === 'admin' ? 'admin' :
                                    <div onClick={() => handleMakeAdmin(user, "admin")} className=""><button className="btn btn-ghost bg-green-400  text-white hover:text-black">Admin</button></div> 
                                    }</td>
                                    <td>{ user.role === 'instructor' ? 'instructor' :
                                    <div onClick={() => handleMakeAdmin(user,"instructor")} className=""><button className="btn btn-ghost bg-sky-400  text-white hover:text-black">Instructor</button></div> 
                                    }</td>
                                    </div>
                                </td>
                                
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;