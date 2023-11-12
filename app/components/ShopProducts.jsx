import productData from "@/data/productsData"
import Image from "next/image"
import Product from "./Product"
import {PiArrowCircleRightFill,PiArrowCircleLeftFill} from 'react-icons/pi'

const ShopProducts = () => {
    return (
        <section className="mb-20">
            <div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
                <div className="mb-10 font-fredoka text-2xl">
                    <div className="flex justify-center -mb-1">
                        {/* <Image className="h-5" scr="/images/heading-icon.svg" width={18} height={24} alt="heading"/> */}
                        <Image className="h-5" src="/images/heading-icon.svg" width={20} height={20} alt="candy" />

                    </div>
                    <div className="text-center">
                        <span className="text-red-500">Best </span>
                        <span className="text-custom-purple">Products</span>
                    </div>
                </div>
                <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                 {
                    productData.map((product,index) => {
                                   
                        return (
                            <Product
                                 name={product.name}
                                 price={product.price}
                                 image={product.image}
                                 key={index}
                            />
                        )
                    })
                 }
                </div>
<div className="flex gap-2 justify-center items-center mt-6">
<PiArrowCircleLeftFill className="text-pink-300 text-4xl"/>
<PiArrowCircleRightFill className="text-pink-500 text-4xl cursor-pointer"/>
</div>
            </div>
        </section>
    )
}

export default ShopProducts