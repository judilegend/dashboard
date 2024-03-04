import React from 'react'
import MainMenu from './MainMenu'
const Sidebar = () => {
  return (
    <section className=' h-[100vh]  bg-[#1D1D1D] pl-4 '>
      <div className='w-full h-20  flex items-center gap-2'>
        <img src="/logo-no-background.png" alt="" className='w-[47px] h-[40px] ' />
        <h1 className='text-xl font-italic font-semibold text-violet-500'>Legend</h1>
      </div>
      <div className='w-full h-[400px]'>
        <h2 className='text-[16px] font-semibold text-[#D3D3D3]'>MAIN MENU</h2>
        <MainMenu image="/Vector (4).png" name="Dashboard" className='active:bg-[#fff]' />
        <MainMenu image="/Calendar.svg" name="Calendar" />
        <MainMenu image="/Clipboard.svg" name="Task" />
        <MainMenu image="/Comments.svg" name="Matters" />
        <MainMenu image="/Add Phone.svg" name="Contacts" />
        <MainMenu image="/Hashtag Activity Grid.svg" name="Activities" />
      </div>
      <div>
        <h2 className='text-[16px] font-semibold text-[#D3D3D3] '>ACCOUNT</h2>
        <MainMenu image="/Service.svg" name="Support" />
        <MainMenu image="/Settings.svg" name="Setting" />
      </div>
    </section>
  )
}

export default Sidebar
