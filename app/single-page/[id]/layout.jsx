import React from 'react'

const layout = (props) => {
  return (
   <>
   <main className='w-full flex flex-col p-5 mt-2 h-fit'>
      {props.children}
   </main>
   </>
  
  )
}

export default layout
