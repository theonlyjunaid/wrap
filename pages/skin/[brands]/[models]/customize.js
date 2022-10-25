import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { theme } from '../../data/theme'
// import Theme from '../../../../../../components/Item/Theme'

export default function Slug({ mobile }) {
    const theme = {
        'PLain Colours': [{
            name: 'Green',
            URL: 'https://dictionary.cambridge.org/images/thumb/green_noun_001_07350.jpg?version=5.0.252'
        },
        {
            name: 'Gray',
            URL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSDxIVFRUVFRUVFRUVFRUVFRUVFRcXFxUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKy0tKy0rKzc3LS0tKzctLTctKy0rLTctLTctLTc3Ny03Ny0tLSstLTctLSstKys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABgQAQEBAQEAAAAAAAAAAAAAAAABEQJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0+mqiKpKEEKkWmAkBcAoAoCiCKgKigIEASgAWhQVBUEIqKCJ01WaCYGAOiKgoqRRFRUFAWCIRcQFUSAAAWpVMBCFICCpAAAEVICgoIzW2egZ0AHSpjSAAQAKAogAoARUAVNWsgoSlBLQUEDVBEVKAGgAQBWeliUGRcAbpVqUEUUEABQgAJVAFQFQKCAAAAAAgAItEBdIRQQWpQZwAHRAAWoAUgQBQAIQBQAEtAECoDSEUBKtQEgACLqAsWJABOqtZoAAN0EBYRFAFQBTABUABUAqKkARUAxpItBNRYAYlCggKBqxnFBWbGkBEQB0qVamAsNDAILgACwEAAhRQZo1jIBixMAihQGVTAAoCAAKkWArNrVYoAgDoCCqqKAigioKCCgAIBUDQNLQ0FQ0gAAIAAQAIrMUCs1pKDIaA6VFoArKgACrFSAgtqAAJQRQBFoABDQEwoAi6gL1UACCyIC6z1VrPVBAUV1qLUESgAoAKIAoQgCKgBSJQVABUUBDSoAqAKhQFtQAGK1UoJougOvTK1AVIAKIAsIEACgKhCgkABRADQABUAQAEFoEMF0GUqs0EUAdUqpQA0ABRRLQEUQBSoAAAAAiiAKgAACKlUBDTQKy1WaAMqDshUqKLEFFKICiRQCAIqVUACJQUQAoABRQRFATBUBFRQRlaAyoIOqU1BVIzaoKIAsWIqogAqwTTQVFKCACCACiKCaUqUF00xAC0qaAlKgINCK2IAAALEAaiACNRBQABaUAKgIACoU8AU9UASoAiJQAqAKAIj//Z'
        }]
    }
    const { query } = useRouter()
    const { brands, models } = query
    // console.log(mobile[brands].name + " " + mobile[brands].brands[models.split("-").join(" ")].name)
    // const ShownItem = useContext(ItemContext)
    const [baba, setBaba] = useState('hidden');
    const [skine, setSkine] = useState(mobile[brands].model[models.split("-").join(" ")]?.skin['plain']);
    useEffect(() => {
        setSkine(mobile[brands].model[models.split("-").join(" ")]?.skin['plain'])
    }, [query]);

    // console.log(mobile[brands].model[models.split("-").join(" ")].skin['plain'])
    return (
        <div>
            {/* <Theme mobile={mobile} model={query.brands} design={query.models} itemview={query.design} query={query} /> */}
            <div className=' md:flex p-4'>
                <div className='w-full md:w-[500px]  flex justify-center'>
                    <img src={skine} alt="" className='w-[250px] md:w-[400px]' />
                </div>
                <div>
                    <div>
                        {
                            Object.keys(mobile).map((mobi, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <div>
                                            <div>
                                                <p className='text-2xl font-semibold my-1' onClick={() => baba === mobi ? '' : setBaba(mobi)}>{mobi.toUpperCase()}</p>

                                                <div>
                                                    {
                                                        Object.keys(mobile[mobi].model).map((mobi2, index2) => {

                                                            return (
                                                                <div key={index2} className={baba === mobi ? '' : 'hidden'}>
                                                                    <p onClick={() => {
                                                                        setSkine(mobile[mobi].model[mobi2].skin.plain);
                                                                    }} className='bg-gray-400 cursor-pointer'>{mobile[mobi].model[mobi2].name}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                    <div className='border border-black max-h-[300px] overflow-y-scroll'>
                        <h1 className='text-3xl  font-semibold mx-2'>Customize Skin</h1>
                        <div className=''>
                            {
                                Object.keys(theme).map((item, index) => {
                                    return (
                                        <div className='my-4 mx-2' key={index}>
                                            <h1 className='text-2xl font-mono font-semibold'>{item}</h1>
                                            <div className='grid grid-cols-4 gap-6'>
                                                {
                                                    theme[item].map((item, index) => {
                                                        return (
                                                            <div className=' ' key={index}>
                                                                <img src={item.URL} alt="" onClick={() => setSkine(skine?.split("/").splice(0, 6).join('/') + '/' + item.name.toLowerCase() + '.webp')} className='w-[50px] h-[50px]' />

                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='mt-1  gap-5'>
                        <div>
                            <Link href="/cart"><a >   <h1 className='px-3 py-1 bg-gray-300 cursor-pointer text-center' onClick={() => {
                                // addTask();
                            }}>Add to Bag</h1>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/mobile')
    const mobile = await res.json()
    return {
        props: {
            mobile
        }
    }
}
