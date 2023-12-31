import Image from 'next/image'
import Rating from '../Ratings'

const ShortDesc = () => {
  return (
    <div className='flex flex-col xl:col-span-4 xl:order-1 order-2 border-2 rounded-3xl border-custom-gray bg-white p-5'>
      <div className='font-fredoka font-bold text-3xl text-custom-purple mb-4'>
        Jelly Candy
      </div>
      <div className='font-poppins font-semibold text-base text-custom-red-2 mb-4'>
        Imported from Germany
      </div>
      <div className='font-poppins leading-6 font-thin text-base text-custom-purple-lite mb-4'>
        <p className='mb-4'>
          Shop artisan candy, gourmet dark chocolates, milk chocolates and white
          chocolates, and candy gifts.
        </p>
        <p>
          It &#39; s the season for tying the knot and our wedding collection of
          candies are the perfect way to celebrate.
        </p>
      </div>
      <div className='flex mb-4'>
        <Rating />
        <div className='font-poppins text-custom-purple text-sm'>(156)</div>
      </div>
      <div className='flex h-full'>
        <div className='self-end'>
          <button
            type='button'
            className='flex text-custom-purple bg-color-orange focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ouline-none dark:focus:ring-blue-800'
          >
            <space className='mr-2'>
              <Image src='/images/heart.png' alt='heart' width={18} height={16} />
            </space>
            <span className='font-poppins text-custom-purple font-bold dark:text-white'>
              Add to Wishlist
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShortDesc
