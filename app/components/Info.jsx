import { FaInfo, FaPhoneAlt, FaSearchLocation,FaRegBuilding  } from 'react-icons/fa';
import { MdOutlineBedroomParent,MdOutlineBathroom } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';
import { GrDocument } from 'react-icons/gr'
const Info=()=>{
    return(
        <>
        <div className='h-fit'>
              <hgroup className='flex gap-x-3'>
                <FaInfo />
                <h1 className='underline'> Info</h1>
              </hgroup><br />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div className='flex gap-x-3 '>
                  <MdOutlineBedroomParent className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Dhoma gjumi:</h3>
                    <p className=''>2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <MdOutlineBathroom  className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Tualetet:</h3>
                    <p className=''>2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <FaRegBuilding  className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Kati:</h3>
                    <p className=''>3</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <TbHome className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Sip. totale:</h3>
                    <p className=''>140m2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <TbHome className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Sip. brendeshme: {' '}</h3>
                    <p className=''>100m2</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <GrDocument className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Doc:</h3>
                    <p className=''> Hipotekuar</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <FaInfo className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Lloji:</h3>
                    <p className=''>Apartament</p>
                  </div>
                </div>
                <div className='flex gap-x-3 '>
                  <FaInfo className='text-4xl md:text-5xl' />
                  <div className='flex md:flex-col'>
                    <h3>Statusi:</h3>
                    <p className=''>e lire</p>
                  </div>
                </div>  
              </div>
            </div>
        </>
    )
}
export default Info;