import Image from 'next/image'
// import Img from '../public/assets/images/'

export default function Home() {
  return (
    <>
     <main className='w-full flex flex-col p-5 mt-2 h-fit'>
  <header className='text-center mx-auto max-w-lg'>
    <h1 className='text-3xl font-bold'>Apartament 2+1</h1>
    <p className='opacity-70 font-mono'>Blv.Gjergj Fishta, prane karubrant alpet</p>
  </header>
  <section className=' flex flex-col md:flex-row   pt-10 gap-10'> 
    <div>
       <div className='flex pl-4 gap-x-7 hover:cursor-pointer'>
        <h2><u>Images  </u></h2>
        <h2><u>Vr Tour </u></h2>
       </div><br />
      <Image src='/assets/images/Img.jpg' className='rounded-md' width={700} height={350} alt='property Image'/>
    </div>
    <div className='md:w-2/4 w-full'>
      <h1><u>Description</u></h1>
   <br />
      <div className="h-fit w-full bg-white rounded-md bg-opacity-30 bg-white p-6 rounded-md shadow-lg p-5 ">
        <p className='leading-7 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati sunt alias, maxime vitae impedit ipsum, expedita omnis porro excepturi id quia molestias facilis iure, incidunt maiores quasi! Perspiciatis, enim!
        Temporibus sequi minus sit unde delectus veniam quo dolores quaerat, dicta voluptatibus quasi molestiae, doloremque nesciunt explicabo libero animi nemo, voluptatum quis corrupti. Facere officia asperiores laborum eveniet mollitia deserunt!
        Voluptates quibusdam ad velit similique tempore obcaecati sunt voluptas, saepe delectus facere quos labore quam commodi. Voluptas amet nemo iste placeat sint, recusandae voluptatem aliquam animi dicta ab blanditiis. Amet!</p>
</div>
  
    </div>
  </section>
  <section>
    <h1>Info</h1>
    <div></div>
  </section>
</main>

    </>
  )
}
