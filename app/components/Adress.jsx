import { FaSearchLocation  } from 'react-icons/fa';

const Adress=()=>{
    return(
        <>
          <div>
              <hgroup className='flex gap-x-3'>
                <FaSearchLocation />
                <h1 className='underline'> Adresa</h1>
              </hgroup><br />
              <div className='w-full'>

              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.243038400884!2d19.809122085571275!3d41.32532820044899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031fb35995b7d%3A0xa642076c7a94ef9d!2sMy%20Gym!5e0!3m2!1sen!2s!4v1699961567097!5m2!1sen!2s" 
              width="500" 
              height="350" 
              className='border-solid rounded-md  w-full ' 
              allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              </div>
            </div>
        </>
    )
}
export default Adress;