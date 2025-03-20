import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutBtn from './LogOutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col w-64 md:w-80 lg:w-80'>
     
      <SearchInput/>
      <div className='divider px-3 py-2'></div>
      
      <Conversations/>

      <LogOutBtn/>
      

    </div>
  )
}

export default Sidebar