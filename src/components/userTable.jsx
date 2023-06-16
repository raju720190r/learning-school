/* eslint-disable react/prop-types */


const UserTable = ({ classes, approveClass, denyClass, openModal, isButtonDisabled }) => {


    return (
        <div className="">

            <div className="overflow-x-auto w-full">
                <table className="table table-xs mt-4">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>ClassImage</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                <td>
                                    {classItem.instructorEmail}
                                </td>
                                <td className="text-center">
                                    {classItem.availableSeats}
                                </td>
                                <td className="">${classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button disabled={isButtonDisabled(classItem._id)} onClick={()=>approveClass(classItem._id)} className="btn btn-sm btn-ghost bg-green-600 text-white">Approve</button>

                                        <button disabled={isButtonDisabled(classItem._id)} onClick={()=> denyClass(classItem._id)} className="btn btn-sm btn-ghost  bg-red-600  text-white">deny</button>
                                        <button onClick={()=>openModal(classItem._id)} className="btn btn-sm btn-ghost bg-yellow-500  text-white">Feedback</button>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;