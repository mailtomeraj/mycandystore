import recomendedProducts from "@/data/recomendedProducts"
import Product from "./Product"
import Image from "next/image"
import Link from "next/link"
const RecomendedProducts = () => {
  return (
    <section className="mb-20">
    <div className="px-3 md:px-7 w-100 mx-auto xl:px-0">
        <div className="mb-10 font-fredoka text-2xl">
            <div className="flex justify-center -mb-1">
                <Image className="h-5" src="/images/heading-icon.svg" width={20} height={20} alt="candy" />

            </div>
            <div className="text-center">
                <span className="text-red-500">Recomended </span>
                <span className="text-custom-purple">Products</span>
            </div>
        </div>
    <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
    {
     recomendedProducts.map((product,index) => {
                      
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
   </div>
   </section>
  )
}

export default RecomendedProducts