import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:mb-12">
        <div className="md:w-1/2">
            <div className="text-4xl xl:text-[64px] leading-normal pt-8 pb-4 font-fa font-fredoka">
                Welcome to <br/>
                The <span className="text-orange-300 ">Candy</span> Store
            </div>
            <div className="text-xl font-poppins leading-normal">
                Shop artisan candy, gourment dark Chocolate, milk Chocolate and white Chocolate, and candy gifts
            </div>
        <Link href="/">
                <div className="text-blck mt-9 inline-flex bg-white p-4 rounded-full font-bold px-7 text-black">
                    Shop now
                </div>
            </Link>
        </div>
        <div className="flex md:w-1/2 align-middle justify-center pt-10">
            <Image className="w-56 md:w-72 xl:w-80" src="/images/lollipop.png" width={224} height={224} alt="lollipop"/>
        </div>
    </div>
  )
}

export default Hero