import Swal from "sweetalert2";
import usePendingClass from "../../../../hooks/usePendingClass";
import useTitle from "../../../../hooks/useTitle";

const ManageClasses = () => {
  useTitle("ManageClasses")
  const [pendingClass, refetch] = usePendingClass();

  const handleSubmit = async (item) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Feedback",
      inputPlaceholder: "Type your Feedback here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log(text);
      Swal.fire(text);
      const feed = { id: item?._id, text };
      fetch(`https://l-school-server.vercel.app/instructorFeedback`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(feed),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data console", data);
        });
    }
  };

  const handleStatus = (item, role) => {
    console.log("role", role);
    const work = { id: item?._id, role };
    fetch(`https://l-school-server.vercel.app/changePendingClass`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(work),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            //todo
            title: `${item.title} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-semibold mb-8 mt-10 uppercase">Change the class status and give the feedback</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-bold text-xl text-black">
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {pendingClass.map((item, index) => (
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

                <td className="">{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.studentNumber}</td>
                <th>{item.price}</th>
                <th>{item.status}</th>
                <th>
                  <button 
                    disabled={
                      item?.status === "approved" || item?.status === "denied"
                        ? true
                        : false
                    }
                    onClick={() => handleStatus(item, "approved")}
                    className={`${
                      item?.status === "approved" || item?.status === "denied"
                        ? "bg-red-200"
                        : "bg-cyan-300"
                    } px-4 py-2  rounded-md`}
                  >
                    Approve
                  </button>
                </th>
                <th>
                  <button
                    disabled={
                      item?.status === "approved" || item?.status === "denied"
                        ? true
                        : false
                    }
                    onClick={() => handleStatus(item, "denied")}
                    className={`${
                      item?.status === "approved" || item?.status === "denied"
                        ? "bg-red-400"
                        : "bg-cyan-300"
                    } px-4 py-2  rounded-md`}
                  >
                    Deny
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSubmit(item)}
                    className="px-4 py-2 bg-cyan-300 rounded-md"
                  >
                    Feedback
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
