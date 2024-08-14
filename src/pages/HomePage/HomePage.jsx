import React from 'react'
import StoryCircle from '../../components/Story/StoryCircle'
import HomeRight from '../../components/HomeRight/HomeRight'

const HomePage = () => {
  return (
    <div className='flex w-[100%] justify-center'>
      <div className='w-[44%] px-10 '>
        <div className='border'>
          <div className='flex border space-x-2 p-4 rounded-md justify-start w-full'>
            {[1, 1, 1, 1, 1].map((items) => <StoryCircle />)}
          </div>
          <div>
            post
          </div>
        </div>
      </div>
      <div>
        <HomeRight />
      </div>
    </div>
  )
}

export default HomePage