
import Image from 'next/image'
import SinglePageDescription from '@/app/components/SinglePageDescription';
import Info from '@/app/components/Info';
import Adress from '@/app/components/Adress';
import Contact from '@/app/components/Contact';

const SinglePage = () => {

  return (
    <>
      <header className='text-center mx-auto max-w-lg'>
        <h1 className='text-3xl font-bold'>Apartament 2+1</h1>
        <p className='opacity-70 font-mono'>Blv.Gjergj Fishta, prane karubrant alpet</p>
      </header>
      <section className=' flex flex-col md:grid md:grid-cols-3   pt-10 gap-10'>
        <div className='w-full col-span-2  '>
          <hgroup className='flex pl-4  gap-x-7 hover:cursor-pointer'>
            <h2 className='hover:underline active:underline'>Images</h2>
            <h2 className='hover:underline'>Vr Tour</h2>
          </hgroup><br />
          <div className='w-full h-[360px] md:h-[400px] xl:h-[600px] 2xl:h-[800px]  bg-white rounded-md bg-opacity-30 bg-white rounded-md shadow-lg'>
            <Image src='/assets/images/Img.jpg' className='rounded-md d-block w-full h-full ' width={750} height={350} alt='property Image' />
          </div>
        </div>
        <SinglePageDescription />
      </section><br />
      <section>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-3 h-fit w-full  bg-white rounded-md bg-opacity-30 bg-white p-5 rounded-md shadow-lg p-5'>
          <Info />
          <Adress />
          <Contact />
        </div>
      </section>

    </>
  )
}

export default SinglePage;