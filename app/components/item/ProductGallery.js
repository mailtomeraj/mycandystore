import Image from 'next/image'

const ProductGallery = () => {
  return (
    <div className='md:col-span-2 relative xl:order-1 order-1 xl:col-span-5 border-2 rounded-3xl border-custom-gray p-4 bg-white'>
      <div className='flex justify-end'>
        <Image src='/images/arrows-expand.svg' width={20} height={20} alt='arrow' />
      </div>
      <div className='grid grid-rows-12 h-full'>
        <div className='row-span-8'>
          <div className='h-full justify-center flex items-center align-middle'>
            <Image src='/images/candy.png' width={350} height={220} alt='candy' />
          </div>
        </div>
        <div className='row-span-4'>
          <div className='flex pb-4 gap-4 h-full justify-center items-center'>
            <div className='justify-center items-center'>
              <Image src='/images/26.png' width={100} height={100} alt='candy' />
            </div>
            <div className='justify-center items-center'>
              <Image src='/images/25.png' width={100} height={100} alt='candy' />
            </div>
            <div className='justify-center items-center'>
              <Image src='/images/24.png' width={100} height={100} alt='candy' />
            </div>
            <div className='justify-center items-center'>
              <Image src='/images/23.png' width={100} height={100} alt='candy' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
