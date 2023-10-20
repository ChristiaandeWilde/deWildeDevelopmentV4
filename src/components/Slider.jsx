import { useEffect, useState } from "react";

function Slider({images, title}) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

    function setSlider(number) {
        console.log('number', number);
        console.log('index', slideIndex);
        
        if (slideIndex === 0 && number === -1) {
            console.log('1');
            console.log(images.length)
            setSlideIndex(images.length -1);
            return
        }

        if (slideIndex === images.length -1 && number === 1) {
            setSlideIndex(0);
            return
        }

        else {
            let newNumber = slideIndex + number
            setSlideIndex(newNumber)
            return

        }
    }

    useEffect(() => {
        // console.log(slideIndex);
        // console.log(activeSlide);
        // setActiveSlide(images[slideIndex])

        const timer = setTimeout(() => {
            setActiveSlide(images[slideIndex])
        },100);

        return () => clearTimeout(timer);
    }, [slideIndex])

    return ( 
    <div id="slider" className="flex flex-col items-center justify-center p-8 ">
        <h1 className="text-2xl font-bold text-cyan-500 mb-4">{title}</h1>
        {images &&
        <>
            <div className="slider-container flex flex-col relative items-center justify-center p-4 w-screen ">
                {/* <h1 className="text-slate-700 text-2xl font-bold mb-6">{title}</h1> */}
                <div className="slider-img max-w-screen-md w-10/12 h-4/6 rounded-md overflow-hidden shadow-xl flex justify-center items-center">
                    <img 
                    className="shadow-lg object-cover h-full w-full" 
                    src={activeSlide}
                    alt={`Img ${activeSlide}`}/>
                    
                </div>
                <a className="btn-prev absolute left-5 w-10 h-10 bg-gradient-to-r from-cyan-500 to-slate-700 hover:from-slate-200 hover:to-cyan-500 sm:left-10 text-black bg-white text-left p-2 rounded-full shadow-lg hover:cursor-pointer" 
                onClick={() => setSlider(-1)}>&lt;
                </a>
                <a className="btn-next absolute right-5 w-10 h-10 bg-gradient-to-r from-slate-700 to-cyan-500 hover:from-cyan-500 hover:to-slate-200 sm:right-10 text-black text-right bg-white p-2 shadow-lg rounded-full hover:cursor-pointer" 
                    onClick={() => setSlider(1)}>&gt;
                </a>
            </div>
        </>}
    </div> );
}

export default Slider;