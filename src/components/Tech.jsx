import React from 'react'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">My tech Stack</h2>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">Tech that i have experience with</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '')
