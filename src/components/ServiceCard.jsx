import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full px-10 py-16 shadow-3xl rounded-[20px]'>
        <div className='w-11 h-11 flex justify-center items-center rounded-full bg-coral-red'>
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className='text-3xl leading-normal font-bold font-palanquin mt-5'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard