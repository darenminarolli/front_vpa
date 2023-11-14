'use client'
import Image from 'next/image'
// import Img from '../public/assets/images/'
import { FaInfo, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';
import { GrDocument } from 'react-icons/gr'
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
            <div className='flex pl-4  gap-x-7 hover:cursor-pointer'>
              <h2 className='hover:underline active:underline'>Images</h2>
              <h2 className='hover:underline'>Vr Tour</h2>
            </div><br />
            <Image src='/assets/images/Img.jpg' className='rounded-md h-[400px]' width={750} height={350} alt='property Image' />
          </div>
          <div className='md:w-2/4 w-full'>
            <h1 className='underline'>Description</h1>
            <br />
            <div className="md:h-[400px]  overflow-y-auto w-full bg-white rounded-md bg-opacity-30 bg-white p-6 rounded-md shadow-lg p-5 ">
              <p className='leading-7 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati sunt alias, maxime vitae impedit ipsum, expedita omnis porro excepturi id quia molestias facilis iure, incidunt maiores quasi! Perspiciatis, enim!
                Temporibus sequi minus sit unde delectus veniam quo dolores quaerat, dicta voluptatibus quasi molestiae, doloremque nesciunt explicabo libero animi nemo, voluptatum quis corrupti. Facere officia asperiores laborum eveniet mollitia deserunt!
                Voluptates quibusdam ad velit similique tempore obcaecati sunt voluptas, saepe delectus facere quos labore quam commodi. Voluptas amet nemo iste placeat sint, recusandae voluptatem aliquam animi dicta ab blanditiis. Amet! sunt voluptas, saepe delectus facere quos labore quam commodi. Voluptas amet nemo iste placeat sint, recusandae voluptatem aliquam animi dicta ab blanditiis. Amet!</p>
            </div>

          </div>
        </section><br />
        <section>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3 h-fit w-full  bg-white rounded-md bg-opacity-30 bg-white p-5 rounded-md shadow-lg p-5'>
            <div>
              <hgroup className='flex gap-x-3'>
                <FaInfo />
                <h1 className='underline'> Info</h1>
              </hgroup><br />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='flex gap-x-3 '>
                  <MdOutlineBedroomParent className='text-4xl md:text-5xl' />
                  <div>
                    <h3>Dhoma gjumi:</h3>
                    <p className=''>2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <TbHome className='text-4xl md:text-5xl' />
                  <div>
                    <h3>Sip. totale:</h3>
                    <p className=''>140m2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <TbHome className='text-4xl md:text-5xl' />
                  <div>
                    <h3>Sip. brendeshme:</h3>
                    <p className=''>100m2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <GrDocument className='text-4xl md:text-5xl' />
                  <div>
                    <h3>Doc:</h3>
                    <p className=''> Hipotekuar</p>
                  </div>
                </div>
                
              </div>
            </div>
            <div>
              <hgroup className='flex gap-x-3'>
                <FaSearchLocation />
                <h1 className='underline'> Adresa</h1>
              </hgroup><br />
            </div>
            <div>
              <hgroup className='flex gap-x-3'>
                <FaPhoneAlt />
                <h1 className='underline'> Kontakt</h1>
              </hgroup><br />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt obcaecati sunt alias, maxime vitae impedit ipsum, expedita omnis porro excepturi id quia molestias facilis iure, incidunt maiores quasi!
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

