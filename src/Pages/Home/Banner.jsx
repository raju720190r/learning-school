import {FaFontAwesomeFlag} from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] bg-[#edd5a8]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0">
                    <div className='text-white  space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl text-white font-bold'>Learning A Language is Easier!</h2>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p> <div>
                            <button className="btn btn-error mr-5 text-white hover:bg-slate-950"><FaFontAwesomeFlag></FaFontAwesomeFlag>Join For Free</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Jm9j6nf/Banner-11.png" alt="" />
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;