import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <div className="text-white bg-custom-red bg-[url('/images/bgfooter.png')] pb-8 bg-no-repeat bg-contain bg-top ">
    <div className=" bg-custom bg-[url('/images/c2.svg')] h-20  bg-no-repeat  bg-top w-full bg-auto">
        
        </div>   
        <div className="px-3 mt-8 md:px-7 w-100 mx-auto xl:w-4/6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:col-span-2">
              <div className="col-span-2">
                <div>
                  <Image src='/images/logo.png' alt="logo" width={98} height={38} />
                </div>
                <div className="mt-4">
                Shop artisan candy, gourment dark Chocolate, milk Chocolate and white Chocolate, and candy gifts
                </div>
                <div className="mt-6 md:mt-10">
                 Built by MERAJ NAQUI &copy;2024 Candy-Store, All rights reserved.
                </div>
              </div>
              <div className="mt-6 md:mt-0 xl:pl-8">
               <div className="font-bold text-lg mb-4">
                Menu
               </div>
               <div className="text-xs flex flex-col space-y-2">
               <Link href="/">Best Sellers</Link>
        <Link href="/">Chocolate</Link>
        <Link href="/">Gifts</Link>
        <Link href="/">Sales and Deals</Link>
        <Link href="/">Experience</Link>
        <Link href="/">Grocery Aistle</Link>
               </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 md:mt-4 xl:mt-0">
              <div className="mt-4 md:mt-0 col-span-2">
                <div className="font-bold text-xl">Subscribe to Newsletter</div>
                <div className="flex">
                  <div className="xl:w-full w-full mt-4 md:w-[75%] sm:w-full">
                    <div className="relative">
                      <input type='text' className="bg-white h-12 w-full border-0 px-4 rounded-full focus:outline-none hover:cursor-pointer"
                      placeholder="Your email address"/>
                      <button className="h-full rounded-full bg-orange-400 absolute top-0 right-0 text-sm p-3 text-black font-bold">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 font-bold text-xl xl:mt-4">Social Links</div>
              <div className="flex space-x-2 mt-4">
                <div className="p-2 rounded-full bg-red-800 flex w-8 h-8">
                  <Image src='/images/instagram.svg' alt="instagram" width={18} height={16} />
                </div>
                <div className="p-2 rounded-full bg-red-800 flex w-8 h-8">
                  <Image src='/images/twitter.svg' alt="twitter" width={18} height={16} />
                </div>
                <div className="p-2 rounded-full bg-red-800 flex w-8 h-8">
                  <Image src='/images/github.svg' alt="github" width={18} height={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
  )
}

export default Footer