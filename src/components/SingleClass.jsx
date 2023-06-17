const SingleClass = ({ single }) => {
  const {
    title,
    image,
    studentNumber,
    availableSeats,
    description,
    price,
    time,
  } = single;
  return (
    <div className="w-full md:w-96 px-8 py-6 shadow-lg border-2 border-cyan-200 mx-auto">
        <div >
          <img className="w-48 h-48 rounded-full mx-auto overflow-hidden border-cyan-200 border-2 p-2 hover:p-0" src={image} />
      </div>
      <h2 className="font-medium text-xl pt-6 text-center">{title}</h2>
      <div className="flex items-center justify-between py-2">
        <p className="text_color text-lg">${price}</p>
        <p className="text_color text-lg">{time} minutes</p>
      </div>
      <div className="flex items-center justify-between">
        <p>Student: {studentNumber}</p>
        <p>Available Seats : {availableSeats}</p>
      </div>
      {/* <p className="text-justify"><span >Description:</span> <span className="text-gray-500 ">{description.length> 100? <>{description.slice(0,100)}.......</>:<>{description}</>}</span></p> */}
    </div>
  );
};

export default SingleClass;
