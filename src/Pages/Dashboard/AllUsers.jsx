
import { FaTrashAlt, FaUserShield, FaUserTag } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch(`${import.meta.env.VITE_server_url}/users`);
        return res.json();
    });

    const handleDelete = (user) => {
        console.log(user);

    };
    const handleMakeAdmin = user => {
        fetch(`${import.meta.env.VITE_serverURL}/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an admin`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleMakeInstructor = user => {
        fetch(`${import.meta.env.VITE_server_url}/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now an instructor`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    };


    return (
        <div className="ml-64">
            <h1 className="text-3xl font-semibold">Total users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role Admin</th>
                            <th>Role Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "admin"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-ghost bg-green-600 text-white"
                                        >
                                            <FaUserShield />{" "}
                                        </button>
                                    )}
                                </td>
                                <td>
                                    {user.role === "instructor" ? (
                                        "instructor"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeInstructor(user)}
                                            className="btn btn-ghost bg-sky-600 text-white"
                                        >
                                            <FaUserTag />{" "}
                                        </button>
                                    )}
                                </td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="btn btn-ghost bg-red-600 text-white"
                                    >
                                        <FaTrashAlt></FaTrashAlt>{" "}
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

export default AllUsers;