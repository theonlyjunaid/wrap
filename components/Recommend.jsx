import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2,
    },
};

const FeaturedPosts = () => {


    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemClass="px-4">
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/product/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>




        </Carousel>
    );
};

export default FeaturedPosts;
