import React from 'react'

const Tasbeeh = ({countNumber, addNumber, removeNumber, resetNumber}) => {
  return (
    <>
      <div className='lg:w-80 w-64 py-20 px-5 lg:p-4 bg-[#2E4272] rounded-lg'>
        <h2 className='text-right bg-white text-black font-bold text-xl rounded-lg py-5 px-2'>
          {countNumber}
        </h2>
        <div className='flex justify-between mt-5'>
          <button onClick={removeNumber} className='btn bg-[#D05A50] p-3 rounded-lg text-white'>remove</button>
          <button onClick={resetNumber} className='btn bg-[#58B058] p-3 rounded-lg text-white'>reset</button>
        </div>
        <button onClick={addNumber} className='btn bg-[#061539] p-12 rounded-full text-white mx-auto block lg:mt-2 mt-8'>add</button>
      </div>
    </>
  )
}

export default Tasbeeh