

const SingleInstructor = ({instructor}) => {
    const {instructorImage, instructorName,instructorEmail, studentNumber} = instructor
    return (
        <div  className="hover:card sm-w-28 md:w-80 h-80 bg-white shadow-xl image-full overflow-hidden mx-auto">
          <figure>
            <img
            className="object-cover sm-w-28 md:w-80 h-80"
              src={instructorImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex bg-cyan-200 bg-opacity-50 justify-center">
            <h2 className="card-title text-white">Name: {instructorName}</h2>
            <div>
            <p className="text-white">Email: {instructorEmail}</p>
            <p className="text-white">Number of Student: {studentNumber}</p>
            </div>
          </div>
        </div>
        // <div className="mx-auto relative">
        //     <div className="">
        //     <img className="object-cover w-80 h-80" src={instructorImage} alt="" />
        //     </div>
        //     <div className="absolute top-3 left-4 bg-cyan-300 bg-cover w-72 h-72 bg-opacity-70">
        //         <div className="flex w-72 h-72 flex-col justify-center items-center">
        //         <h3>{instructorName}</h3>
        //         <p>{instructorEmail}</p>
        //         <p>{studentNumber}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleInstructor;