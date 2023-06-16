import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/usAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import MyClassTable from "../../components/MyClassTable";
import { useQuery } from "@tanstack/react-query";


const MySelectedClass = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["selected"], async () => {
        const res = await axiosSecure.get(`/classes/selected/${user?.email}`);
        return res.data;
    });
    console.log(classes)


    // delete a class by id
    const deleteClass = (id) => {
        console.log(id)
        axiosSecure.delete(`/classes/selected/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        text: "Class deleted successfully",

                    })
                    refetch();
                }
            });
    }

    const handlePay = (id) => {
        console.log("pay", id)
        navigate(`/dashboard/payment/${id}`)
    }




    return (
        <div className="ml-64">
            <MyClassTable
                refetch={refetch}
                classes={classes}
                deleteClass={deleteClass}
                handlePay={handlePay}
            />

        </div>
    );
};

export default MySelectedClass;