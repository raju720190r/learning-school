const MyClassTable = ({ classes, deleteClass, handlePay }) => {



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
                            <th>Action</th>
                            <th >Delete</th>
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
                                        <img src={classItem.image} alt="Class image" />
                                    </div>
                                </td>
                                <td>{classItem.name}</td>
                                <td>
                                    {classItem.instructor}
                                </td>

                                <td className="text-center">
                                    {classItem.availableSeats}
                                </td>
                                <td className="">${classItem.price}</td>
                                <td>
                                    <button onClick={() => handlePay(classItem._id)} className="btn btn-sm btn-ghost bg-green-600 text-white">Pay</button>
                                </td>

                                <td>
                                    <button onClick={() => deleteClass(classItem._id)} className="btn btn-sm btn-ghost  bg-red-600  text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClassTable;