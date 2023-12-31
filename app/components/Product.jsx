import Link from "next/link"
import Image from "next/image"
import Ratings from "./Ratings"

const Product = ({ name, price, image }) => {
  return (
    <div className="bg-white text-center p-3 border-gray-300 pb-6 border-[2px] rounded-[20px]">
      <div><Link href="">
        <Image src={image} alt={name} className="w-full" width={279} height={274} />
      </Link>
      </div>
      <div className="font-fredoka text-xl text-custom-purple">{name}</div>
      <div className="flex items-center justify-center mt-3">
        <Ratings />
      </div>
      <div className="text-red-500 text-xl font-bold mt-2 font-poppins">{price}</div>
    </div>
  )
}

export default Product