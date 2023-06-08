
const SectionTitle = ({ subHeading, heading,headingDetails}) => {
    return (
        <div className="text-center my-5">
            <h5 className="text-red-500 font-bold uppercase">{subHeading}</h5>
            <h2 className="text-5xl font-bold my-3">{heading}</h2>
            <p>{headingDetails}</p>
        </div>
    );
};

export default SectionTitle;