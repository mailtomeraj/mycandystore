import bestSellersData from "@/data/bestSellersData"
import Image from "next/image"
import Link from "next/link"
const BestSellers = () => {
  return (
  <section className="mb-14 xl:-mt-14">
    <div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
<div className="mb-10 font-fredoka text-2xl">
    <div className="text-center text-custom-purple">
        <div className="flex justify-center -mb-1 ">
            <Image className="h-5" src="/images/heading-icon.svg" width={20} height={20} alt="candy"/>
        </div>
        <span className="text-red-500">Best</span> Sellers
    </div>
</div>
<div>
    <div className="grid grid-cols-1 md:grid-cols-3">
        {
            bestSellersData.map((data,key) => {
            return (
                <div key={key}>
                    <div className="">
                        <div className="mb-10 flex flex-col justify-center align-middle">
                            <div className="bg-white mx-auto rounded-full h-48 w-48">
                                <Image  className="w-full h-full" src={data.image} width={270} height={270} alt="candy"/>
                                </div>
                                <div className="mt-2 font-fredoka text-xl text-center  text-custom-purple">
                                    {data.title}
                                    </div>
                                    <div className=" text-red-500 text-lg font-bold text-center ">
                                    {data.price}
                                    </div>
                                    <div className="mt-6 text-center">
                                        <Link href="/" className={`${data.btnLayout.bgColor} ${data.btnLayout.textColor}  px-6 py-3 text-sm font-semibold rounded-full box-content`}>
                                            Watch More
                                        </Link>
                                    </div>
                            </div>
                        </div>

                </div>

                )
            })
        }

    </div>
</div>
    </div>

  </section>
  )
}

export default BestSellers