
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { uploadImage } from "../../DataApi/uploadImage";
import { addClass } from "../../DataApi/addClass";
import AddClassFrom from "../../components/AddClassFrom";
import useAuth from "../../Hooks/usAuth";



const AddClass = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Class Image');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.class.value;
        const instructor = e.target.instructor.value;
        const instructorEmail = e.target.email.value;
        const price = e.target.price.value;
        const seats = e.target.seats.value;
        const availableSeats = parseInt(seats);
        const image = e.target.image.files[0];
        setUploadButtonText("uploading...");
        console.log(name,instructor,instructorEmail,price,seats,availableSeats,image);

        // image upload to imgbb
        uploadImage(image)
            .then((data) => {
                const classData = {
                    name,
                    instructor,
                    instructorEmail,
                    price,
                    availableSeats,
                    image: data.data.display_url,
                    status: 'pending',
                    numberOfStudents: 0,
                }
                // posting the room to the db
                addClass(classData)
                    .then(data => {
                        console.log(data)
                        setUploadButtonText("Uploaded");
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: true,
                            confirmButtonText:
                                '<i class="fa fa-thumbs-up"></i> Great!',
                            timer: 1500
                        })
                        navigate('/dashboard/myClass')
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log(err)
                        setLoading(false);
                    }).catch(err => {
                        console.log(err)
                        setLoading(false);
                    })
            })


    }

    const handleImageChange = (image) => {
        setUploadButtonText(image.name)
    }



    return (

        <div>
            <AddClassFrom
                user={user}
                loading={loading}
                handleSubmit={handleSubmit}
                handleImageChange={handleImageChange}
                uploadButtonText={uploadButtonText}
            ></AddClassFrom>
        </div>
);
};

export default AddClass;
