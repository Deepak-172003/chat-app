import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex w-full h-screen sm:h-[450px] md:h-[550px] lg:h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

      <Sidebar/>
      {/* message container component */}
      <MessageContainer/>

    </div>
  )
}

export default Home