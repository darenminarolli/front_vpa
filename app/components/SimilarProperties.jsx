import { FaSearchLocation } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Button from './ui/Button';
const SimilarProperties = () => {
  return (
    <>
    <div className='h-fit'>
            <hgroup className='flex gap-x-3'>
              < FaSearchLocation />
              <h1 className='underline'> Prona te ngjashme</h1>
            </hgroup><br />
            <div className='flex flex-col md:flex-row h-full'>
              <img class="w-[400px] h-[350px]   rounded-l-md " src="/assets/images/Img.jpg" alt="img" />
              <hgroup className='w-auto md:ml-8 text-center items-center pt-8 md:pt-24'>
                <h1>Apartament 2+1</h1>
                <h2>230,000$</h2>
                <div className='flex gap-1  justify-center'>
                  <FaLocationDot />
                  <p className='text-sm'>Tirane,Shqiperi</p>
                </div><br />
                <Button name='Shiko'/>
              </hgroup>
            </div>
          </div>
    </>
  )
}

export default SimilarProperties
