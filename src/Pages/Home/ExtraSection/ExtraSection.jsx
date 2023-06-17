

const ExtraSection = () => {
    return (
        <>
            <h1 className="text-3xl font-medium text-center mt-4 py-8 uppercase fond-bold bg-pink-200 mb-5">
                Learning Language Related Video{" "}
            </h1>
            <div className="flex">
                <div className=" md:w-[560px] md:h-[315px] mx-auto mt-8">
                    <iframe className="md:w-[560px] md:h-[315px]" src="https://www.youtube-nocookie.com/embed/nQJ8HPrFkSI?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className=" md:w-[560px] md:h-[315px] mx-auto mt-8">
                    <iframe className="md:w-[560px] md:h-[315px]" src="https://www.youtube-nocookie.com/embed/L_FhIDiheoU?start=" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
};

export default ExtraSection;