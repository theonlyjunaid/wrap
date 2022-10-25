import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Product from '../../../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
// import mobile from '../../api/data/mobile'

function Index({ products }) {
    console.log(products)
    // const router = useRouter();
    const [show, setShow] = useState('hidden')
    // const [rola, setRola] = useState('apple')
    // const [design, setDesign] = useState('iphone 14')
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     setRola(router.query.brands)
    //     setDesign(router.query.models?.split("-").join(" "))

    // }, [router.query]);
    return (
        <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  py-8 min-h-max'>
                {products.map((product, index) => {
                    const destination = '/skin/' + product.brand + '/' + product.name.split(" ").join("-") + '/' + product.color
                    return (
                        <Link href={destination} key={index}><a><div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                            onMouseEnter={() => setShow(product.slug)}
                            onMouseLeave={() => setShow('')}
                        >
                            {/* {product.name} {product.color} */}
                            <img src={product.img} alt="" className='w-[260px] my-2' />
                            <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 flex justify-center py-6 ${show === product.slug ? '' : 'hidden'} `}>
                                <div>{product.color}</div>
                            </div>
                        </div></a></Link>
                    )
                })}
            </div>
        </div>
        // <div className=''>
        //     <div className='flex justify-center sm:justify-start text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{mobile[rola]?.model[design]?.name} Skins and Wraps</div>
        //     <div className='flex sm:text-xl md:text-2xl lg:text-3xl font-mono items-center px-4 sm:px-10 justify-center md:justify-start'><div className='hidden sm:flex'> Select Your Design or </div> <Link href={"/" + "skin" + "/" + router.query.brands + "/" + router.query.models + "/" + "customize"}><a><div className='font-semibold bg-yellow-300 px-3 sm:bg-gray-300 md:px-2 py-1 md:py-2 rounded-2xl ml-2 hover:bg-yellow-400'>Start the Customizer</div></a></Link></div>
        //     <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  py-8 min-h-max'>
        //         {
        //             design && Object.keys(mobile[rola]?.model[design]?.skin).map((item, index) => {
        //                 let destination = "/skin/" + mobile[rola].name.toLowerCase().split(" ").join("-") + "/" + design.toLocaleLowerCase().split(" ").join("-") + "/" + item.toLocaleLowerCase().split(" ").join("-")
        //                 let jadu = mobile[rola]?.model[design]?.skin;
        //                 return (
        //                     <Link href={destination} key={index + jadu[item]}><a>
        //                         <div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
        //                             onMouseEnter={() => setShow(item)}
        //                             onMouseLeave={() => setShow('')}
        //                         >

        //                             <img src={jadu[item]} alt="" className='w-[260px] my-2' />
        //                             <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 flex justify-center py-6 ${show === item ? '' : 'hidden'} `}>
        //                                 <div>{mobile[rola]?.model[design].skin[item].split("/")[6].split(".")[0].toUpperCase()}</div>
        //                             </div>
        //                         </div>
        //                     </a></Link>
        //                 )
        //             })
        //         }</div>
        // </div>
    )
}

export default Index



export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    let model = context.query.models.split('-').join(' ')
    let brand = context.query.brands
    // let design = context.query.design.split('-').join(' ')
    let products = await Product.find({ name: model, brand: brand }).lean();

    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}






