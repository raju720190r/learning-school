import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UserTable from "../../components/userTable";
import FeedbackModal from "../../components/FeedbackModal";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageClass = () => {
    // const [classes] = useClass();

    const [axiosSecure] = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [disabledIds, setDisabledIds] = useState([]);
    

    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get('/classes');
        return res.data;
    });

    // onClick function to make a request to approve a class
    const approveClass = async (id) => {
        await axiosSecure.put(`/classes/approved/${id}`);
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Class Approved',
            showConfirmButton: false,
            timer: 1500
        })
        setDisabledIds([...disabledIds, id]);

        refetch();
    };
    const isButtonDisabled = (id) => disabledIds.includes(id);


    // onClick function to make a request to deny a class
    const denyClass = async (id) => {
        await axiosSecure.put(`/classes/denied/${id}`);
        Swal.fire({
            position: 'middle',
            icon: 'error',
            title: 'class denied',
            showConfirmButton: false,
            timer: 1500
        })
        setDisabledIds([...disabledIds, id]);

        refetch();
        
    };

      // for modal

      const openModal = (id) => {
        setIsOpen(true);
        setSelectedId(id);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedId('');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSend = () => {
        console.log( inputValue,);
        //   sending feedback to the db
        axiosSecure.put(`/classes/feedback/${selectedId}`, {  inputValue });
        setInputValue('');
        // Close the modal
        closeModal();
        Swal.fire({
            position: 'middle',
            icon: 'success',
            title: 'Feedback sent',
            showConfirmButton: false,
            timer: 1500
        })
    };


    return (

<div className="ml-72">

<UserTable classes={classes}
    approveClass={approveClass}
    denyClass={denyClass}
    refetch={refetch}
    openModal={openModal}
    isOpen={isOpen}
    closeModal={closeModal}
    inputValue={inputValue}
    handleInputChange={handleInputChange}
    handleSend={handleSend}
    isButtonDisabled={isButtonDisabled}
    
/>
<FeedbackModal
    isOpen={isOpen}
    openModal={openModal}
    closeModal={closeModal}
    inputValue={inputValue}
    handleInputChange={handleInputChange}
    handleSend={handleSend}
></FeedbackModal>
</div>



    );
};

export default ManageClass;