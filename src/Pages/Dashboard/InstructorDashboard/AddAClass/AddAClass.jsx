import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useTitle from "../../../../hooks/useTitle";

const AddAClass = () => {
  useTitle("AddAClass")
    const {user} = useAuth()
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_token = import.meta.env.VITE_Img_Upload;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const availableSeats = 0;
  const status = 'pending'

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          console.log( imgResponse.data.display_url);
          const { title, price, studentNumber, time ,instructorName, instructorEmail ,description} = data;
          const newClass = {
            title,
            price: parseFloat(price),
            studentNumber: parseInt(availableSeats),
            time,
            image: imgURL,
            instructorName,
            instructorEmail,
            instructorImage : user?.photoURL,
            status,
            availableSeats: parseInt(studentNumber),
            description
          };
          console.log(newClass);
          axiosSecure.post("/pendingClass", newClass).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  

  return (
    <div className="w-full px-10">
      <h1 className="text-center text-3xl font-semibold mb-5">Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-2 items-center justify-center gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Class name*</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              {...register("title", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Class Image*</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="number"
              {...register("studentNumber", { required: true })}
              placeholder="Available seats"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="price"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Time*</span>
            </label>
            <input
              type="text"
              {...register("time", { required: true })}
              placeholder="time"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mb-2">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">InstructorName</span>
            </label>
            <input
               defaultValue={user?.displayName} {...register("instructorName")}
              readOnly
              placeholder="Jane Smith"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">InstructorName</span>
            </label>
            <input
               defaultValue= {user?.email}  {...register("instructorEmail")}
              readOnly
              placeholder="johndoe@example.com"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>
        <input className="btn bg-cyan-300 hover:bg-cyan-400 mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddAClass;
