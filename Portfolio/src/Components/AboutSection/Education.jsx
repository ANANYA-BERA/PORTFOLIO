import React from 'react'

const Education = () => {
  return (
    <div className='px-10 py-3 w-1/2 flex flex-row gap-25 rounded-2xl bg-rose-50 items-center shadow' data-aos='slide-up'>
        
        <h2 className='text-xl font-semibold text-rose-500'>Education</h2>
            <div className='left-0' data-aos='slide-right'>
                <ul className='list-disc space-y-4 font- text-[#212842] font-semibold marker:text-rose-600'>
                  <li>Diploma in Computer Science<br/> <p>(2023-2026)</p></li>
                  <li>Dr. Meghnad Saha Institute of Technology</li>
                </ul>
            </div>
    </div>
  )
}

export default Education
