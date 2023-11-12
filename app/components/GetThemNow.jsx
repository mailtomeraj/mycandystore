import Image from "next/image"
import Link from "next/link"

const GetThemNow = () => {
  return (
    <section className='mb-14'>
<div className='px-3 md:px-7 w-100 mx-auto xl:w-4/6'>
  <div className='relative flex justify-center items-center'>
    <span className='w-full xs:block md:hidden'>
      <Image src="/images/banner-sm.png" alt="get now" width="344" height="400" className="mx-auto"/>
        </span>
        <span className='w-full hidden md:block xl:hidden'>
      <Image src="/images/banner-md.png" alt="get now" width="704" height="332" className="mx-auto"/>
        </span>
        <span className='w-full hidden md:hidden xl:block'>
      <Image src="/images/banner-lg.png" alt="get now" width="1140" height="400" className="mx-auto text-center"/>
        </span>
        <div className="top-0 absolute w-full h-full">
          <div className="flex flex-col pt-16 md:pt-0 md:justify-center items-center h-full text-center">
<div className="font-fredoka text-3xl font-bold text-custom-purple leading-4 tracking-wide">
Get Them Now!
</div>
<div className="text-base mt-4 font-semibold text-custom-purple leading-8 tracking-wide ">
  Candy, lollipops, gum starts from {''}
  <span className="text-red-500">$9.99</span>
</div>
<div className="mt-8">
  <Link href='/' className="bg-red-500 px-6 text-white py-3 text-sm font-semibold rounded-full box-content">
    Read more
  </Link>
</div>
          </div>

        </div>
  </div>
</div>
    </section>
  )
}

export default GetThemNow