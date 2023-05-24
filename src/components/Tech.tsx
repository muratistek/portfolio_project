import React from 'react'
import BallCanvas from './canvas/BallCanvas'
import { technologies } from '@/models/technology'

export default function Tech() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 pt-32 pb-40'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}
