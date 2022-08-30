import React from 'react'

import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar'
import FinalProduct from '../../../components/FinalProduct'
import Footer from '../../../components/Footer'
import Recommend from '../../../components/Recommend'
import FinalProductDetail from '../../../components/FinalProductDetail'
function slug() {
    const router = useRouter()
    const mamu = router.query.slug
    return (
        <div>
            <Navbar />
            <FinalProduct />
            <FinalProductDetail />
            <Recommend />
            <Footer />
        </div>
    )
}

export default slug