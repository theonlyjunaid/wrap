import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import Products from '../../components/Products'
import ProductHead from '../../components/ProductHead'
import Footer from '../../components/Footer'
import Recommend from '../../components/Recommend'


// export const getStaticPaths = () => {
//     const paths = getItemsByCategories.map((curElem) => {
//         return {
//             params: { slug: curElem }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }

// }
// export const getStaticProps = (context) => {
//     const name = context.params.slug
//     const res = getItemsByCategories[name]
//     return {
//         props: {
//             res
//         }
//     }

// }

const Post = () => {
    const router = useRouter()
    const fileId = router.query.slug
    console.log(fileId)
    // const [page, setPage] = useState(fileId)
    // localStorage.setItem(page, fileId)
    // useEffect(() => {
    //     setPage(page)
    // }, [fileId])



    return (
        <>
            <Navbar />
            <ProductHead />
            <Products category={fileId} />
            <Recommend />
            <Footer />
        </>
    )
}

export default Post